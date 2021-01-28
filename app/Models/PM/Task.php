<?php

namespace App\Models\PM;
use Illuminate\Support\Facades\DB;
use Exception;
use Hamcrest\Type\IsArray;
use Illuminate\Mail\Message;
use App\Models\BObject;
use App\Models\Dictionaries\Dictionary;

class Task extends BObject{



    public function MasterKeyField(){
        return 'TaskId';
    } 



    public function FilterSource(){return [
        ['label'=> 'Task', 'value'=> 't.Name', 'type'=> 'string' ],
        ['label'=> 'Project', 'value'=> 'p.name', 'type'=> 'string' ],
       
    ];}

    public function CustomFilters() { 
      
        $projects = (new Project)->getMasterList($this->OrganizationId, ' 1 = 1 ');
        

        return [
        ['Caption'=> 'Projects', 'Filter'=> '(t.ProjectId =  <input>)', 'Label'=>'P', 'Warning' => '' , 'HTML'=>'select', 'options' => $projects, 'optionfields' => ['id', 'Name']],
        ['Caption'=> 'Current tasks',  'Filter'=> 't.TaskStatusId = 17 and t.DateStart <= CURRENT_DATE() and ' .
                'coalesce(t.DateEnd, GetLastDay(CURRENT_DATE(), Duration, CalendarId)) >=  CURRENT_DATE()',  'Warning' => '' , 'Label'=>'C', 'Default'=>1],
       
        ['Caption'=> 'All scheduled tasks',  'Filter'=> 't.TaskStatusId = 17',  'Warning' => '' , 'Label'=>'C',],
        ['Caption'=> 'All defined tasks',  'Filter'=> 't.TaskStatusId = 16',  'Warning' => '' , 'Label'=>'D',],
        ['Caption'=> 'All open tasks',  'Filter'=> 't.TaskStatusId in (16, 17)',  'Warning' => '' , 'Label'=>'D',],
        
        ['Caption'=> 'All tasks',  'Filter'=> '1 = 1',  'Warning' => 'Doriti sa aduceti toate taskurile?' , 'Label'=>'All',]];
    }


    public function DefaultMasterValues()  { 
        return [
        'TaskTypeId'=>Dictionary::getDictionaryItem('PM_TaskType', 'W'),
        'TaskStatusId'=>Dictionary::getDictionaryItem('PM_TaskStatus', 'Def'),
        'DurationTypeId'=>Dictionary::getDictionaryItem('PM_DurationType', 'FW'),
        'ConstraintId'=>Dictionary::getDictionaryItem('PM_TaskConstraint', 'ASAP'),
        'Progress'=>0,
        'Priority'=> 10,
        'Duration'=>1,
        'Units'=>1,
        'Work'=>1
        ];
    }

    public $MasterSelect  = "SELECT t.*, p.Name as Project, tr.Name as TaskType, ts.Name as TaskStatus,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  end as DataStart,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END DataStartC,
            case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end DataEndC,
            DateDiff(case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end, 
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END) + 1  RealDuration
            from task t
            inner join project p on p.ProjectId = t.ProjectId
            left join elemdictionary tr on tr.ElemDictionaryId = t.TaskTypeId
            left join elemdictionary ts on ts.ElemDictionaryId = t.TaskStatusId
            where p.OrganizationId = :_OrganizationId_ :filter
            order by p.Name, case when haschild = 0 and t.ParentId is null then null else t.Parents end, t.Level, DataStart";


    public $MasterItemSelect = "SELECT t.*, p.Name as Project, tr.Name as TaskType, ts.Name as TaskStatus,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  end as DataStart,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END DataStartC,
            case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end DataEndC,
            DateDiff(case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end, 
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END) + 1  RealDuration
            from task t
            inner join project p on p.ProjectId = t.ProjectId
            left join elemdictionary tr on tr.ElemDictionaryId = t.TaskTypeId
            left join elemdictionary ts on ts.ElemDictionaryId = t.TaskStatusId
            where t.TaskId = :TaskId";
                    
    public $MasterInsert = "call inserttask (':Name', ':Date', ':DateStart', ':DateEnd', :Priority, :Duration,
            :TaskTypeId,  :ProjectId, ':Description',  :ParentId, :_PersonId_, :ResponsableId, :TaskStatusId, :DurationTypeId, :AutoSchedule, :ConstraintId,
            :Work, :Units, :CalendarId, :IsEffortDriven, ':Notes')";


    public $MasterUpdate = "call updatetask (:TaskId, ':Name', ':Date', ':DateStart', ':DateEnd', :Priority, :Duration,
            :TaskTypeId,  :ProjectId, ':Description',  :ParentId, :_PersonId_, :ResponsableId, :TaskStatusId, :Progress /100.0, :DurationTypeId, :AutoSchedule, :ConstraintId,
            :Work, :Units, :CalendarId, :IsEffortDriven, ':Notes')";


    public $MasterDelete = "call deletetask(:TaskId)";
         


   public static function getprojecttasksgantt($ProjectId, $ParentId, &$all, $filter){

        $ParentId = sqlnull($ParentId);

        $sql = "SELECT t.*,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  end as DataStart,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END DataStartC,
            case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end DataEndC,
            DateDiff(case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end, 
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END) + 1  RealDuration
            from task t 
            where t.ProjectId = {$ProjectId} 
                and (t.ParentId = {$ParentId} or (t.ParentId is null and ifnull({$ParentId}, -9999) = -9999)) {$filter}
            order by
                case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  end ";


        $arr = [];
        $tasks = DB::select($sql);
        foreach($tasks as $t){

            $tasks = self::getprojecttasksgantt($t->ProjectId, $t->TaskId, $all, $filter);
            $duration = count($tasks)==0?$t->Duration:null;
            $sync = count($tasks)==0?false:true;
            array_push($all, $t->TaskId);
            array_push($arr, array(
                "id"=>$t->TaskId,
                "label" => $t->Name,
                "dateStart" => $t->DataStart,
                "duration" => $t->Duration,
                "progress" => $t->Progress,
                "synchronized" => $sync,
                "type" => 'task',
                "tasks" => $tasks
            ));
            
        } 
        return $arr;
    }


    public static function getTaskConnections($taskids){
        $tas = implode(",", $taskids);
       
        if ($tas != '')
            $filter = ' ParentTaskId in ('.$tas.')';
        else 
            $filter = ' 1 = 0 ';

        $sql = "select ParentTaskId, ChildTaskId, Lag, LinkType from tasklink
        where {$filter}";

        return DB::select($sql);
    }


    public static function getCalendars($OrganizationId){
        return DB::select("select CalendarId, Name from calendar where OrganizationId = {$OrganizationId} order by IsDefault desc, Name");
    }


    public static function getmytasks($userid,  $filter){

        if (!isset($taskstatusid))
            $taskstatusid = 0;

        if (!isset($tasktypeid))
            $tasktypeid = 0;

        //$tasks = DB::select(' call getMyTasks (?, ?, ?)', [$userid, $taskstatusid, $tasktypeid]);


        $sql = "SELECT t.*, p.Name as Project, tr.Name as TaskType, ts.Name as TaskStatus,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  end as DataStart,

        case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END DataStartC,
        case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end DataEndC,
        DateDiff(case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end, case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END) +1  RealDuration
        from task t
        left join project p on p.ProjectId = t.ProjectId
        left join tasktype tr on tr.TaskTypeId = t.TaskTypeId
        left join taskstatus ts on ts.TaskStatusId = t.TaskStatusId
        where ifnull(p.State,1) = 1 and
            (EXISTS (select * from taskxuser pp where pp.Taskid = t.TaskId and pp.Userid = ".$userid.")
            or t.ReporterId = ".$userid.")";

        if (is_array($filter)){

            $origfilter = $filter;
            $projectid = $filter["projectid"];

            $filter = $filter["filter"];
            $filter = str_replace( "Filter=", "", $filter);

            if ($projectid != "")
                $sql = $sql . "  and p.ProjectId = ".$projectid;

        }

        $filter = substr($filter, 0, -1);


        $filter = str_replace( ",", " and ", $filter);

        // punem t. in fata tilrelor
        $filter = str_replace( "TaskStatusId", "t.TaskStatusId", $filter);
        $filter = str_replace( "TaskTypeId", "t.TaskTypeId", $filter);



        if ($filter != "")
            $sql = $sql . " and ".$filter;

        $sql = $sql." order by p.Name, case when haschild = 0 and t.ParentId is null then null else t.Parents end, t.Level, DataStart";
        $tasks = DB::select($sql);
        return $tasks;
    }

    public static function getTasksStatus(){
        $sql = "
            SELECT
            count(
            CASE
                WHEN  TaskStatusId = 1 THEN 1
                ELSE null
            END) as Defined ,
            count(
            CASE
                WHEN  TaskStatusId = 2 THEN 1
                ELSE null
            END) as Scheduled ,

            count(
            CASE
                WHEN  TaskStatusId = 3 THEN 1
                ELSE null
            END) as Done
            FROM task t
                inner join project p on  t.ProjectId = p.ProjectId
            where p.State = 1 and ifnull(HasChild,0) = 0;";
        $tasks = DB::select($sql);
        return $tasks;
    }


    public static function getProjectsStatus(){
        $sql = "
            select p.name as Project , count(case when t.TaskStatusId = 1 then 1 else null end) as Defined,
            count(case when t.TaskStatusId = 2 then 1 else null end) as Scheduled
            from project p
            inner join task t on t.ProjectId = p.ProjectId
            where t.TaskStatusId in (1, 2) and  ifnull(HasChild,0) = 0 and p.State = 1
            group by p.ProjectId, p.Name
            order by p.name";
        $projects = DB::select($sql);
        return $projects;

    }


    public static function getactivetasks($userid){

        if (!isset($taskstatusid))
            $taskstatusid = 0;

        if (!isset($tasktypeid))
            $tasktypeid = 0;

        //$tasks = DB::select(' call getMyTasks (?, ?, ?)', [$userid, $taskstatusid, $tasktypeid]);


        $sql = "SELECT t.*, p.Name as Project, tr.Name as TaskType, ts.Name as TaskStatus,

                case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE()) end as DataStart,

        case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE()) END DataStartC,
        case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end DataEndC,
        DateDiff(case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end, case when (t.TaskStatusid = 1) then CURRENT_DATE() else  ifnull(t.DateStart, CURRENT_DATE()) END) +1  RealDuration
        from task t
        left join project p on p.ProjectId = t.ProjectId
        left join tasktype tr on tr.TaskTypeId = t.TaskTypeId
        left join taskstatus ts on ts.TaskStatusId = t.TaskStatusId
        where ifnull(p.State, 1 ) = 1 and ((ts.TaskStatusId = 2)) and
             ((
                    CURRENT_DATE() between case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE()) end
                                                    and
                                            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE()) END
            ) or t.TaskTypeId = 4 )
            and
            (EXISTS (select * from taskxuser pp where pp.Taskid = t.TaskId and pp.Userid = ".$userid.")
            or t.ReporterId = ".$userid.")";


        $sql = $sql." order by case when tr.TaskTypeId = 4 then 0 else 1 end, p.Name, case when haschild = 0 and t.ParentId is null then null else t.Parents end, t.Level, DataStart";
        $tasks = DB::select($sql);
        return $tasks;
    }


    public static function getTaskLinks($Tasks){

       
        if ($Tasks != '()')
            $filter = ' ParentTaskId in '.$Tasks;
        else 
            $filter = ' 1 = 0 ';

        $sql = 'SELECT r.ParentTaskId, ChildTaskId, Code, Name, Lag FROM `taskrelation` r
        inner join taskrelationtype t on r.TaskRelationTypeId = t.TaskRelationTypeId
        where '.$filter;

        $links = DB::select($sql);
        return $links;

    }

    public static function getprojecttasks($projectid, $filter){

        if ($projectid == '')
            $projectid = -99999;

        $sql = "SELECT t.*, p.Name as Project, tr.Name as TaskType, ts.Name as TaskStatus,  case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  end as DataStart,

        case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END DataStartC,
        case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end DataEndC,
            DateDiff(case when (t.TaskStatusid = 1)  or t.DateEnd is null then GetLastDay(CURRENT_DATE(), Duration, CalendarId)  else t.DateEnd end,
            case when (t.TaskStatusid = 1) then CURRENT_DATE() else ifnull(t.DateStart, CURRENT_DATE())  END) + 1 RealDuration
        from task t
        left join project p on p.ProjectId = t.ProjectId
        left join tasktype tr on tr.TaskTypeId = t.TaskTypeId
        left join taskstatus ts on ts.TaskStatusId = t.TaskStatusId
        where p.projectid =  ".$projectid;



        $filter = substr($filter, 0, -1);
        $filter = str_replace( ",", " and ", $filter);

        $filter = str_replace( "TaskStatusId", "t.TaskStatusId", $filter);
        $filter = str_replace( "TaskTypeId", "t.TaskTypeId", $filter);


        if ($filter != "")
            $sql = $sql . " and ".$filter;

       $sql = $sql." order by p.Name, case when ifnull(haschild,0) = 0 and t.ParentId is null then null else t.Parents end, t.Level, DataStart";


       $tasks =  DB::select($sql);


       return $tasks;
    }

    public static function gettaskrow($taskid){
        $tasks =  DB::table('vwtasks')->where('TaskId', $taskid);
        $tasks = $tasks->orderBy('Name')->get();
        return $tasks;
    }



    public static function getTaskNotes($taskid){
        $sql = "select substring(IfNull(n.Title, n.Text), 1, 70) as TextS, n.Text, n.title, n.Tags , n.NoteId , n.IsLink
        from note n
        inner join taskxnote x on x.NoteId = n.NoteId
        where x.taskid = ".$taskid;
        $notes =  DB::select($sql);
        return $notes;
    }

    public static function getTaskComment($taskid){
        $sql = "select substring(c.Comment, 1, 70) as TextS, c.Comment, u.Name as User, c.Data, c.TaskCommentId
        from taskcomment c
        inner join user u on c.UserId = u.UserId
        where c.TaskId = ".$taskid;
        $notes =  DB::select($sql);
        return $notes;
    }

    public static function  deleteTaskComment($commentid){
        $sql = "delete from taskcomment where TaskCommentId =".$commentid;
        DB::select($sql);
        return 0;
    }

    public static function addTaskComment($taskid, $Comment, $userid, $commentid){
        if ($commentid == '')
            $sql = "insert into taskcomment(TaskId, Comment, UserId) values (".$taskid.",'".$Comment."',".$userid.")";
        else
            $sql = "update taskcomment set Comment= '".$Comment."' where TaskCommentId = ".$commentid;

        DB::select($sql);
        return 0;
    }


    public static function getTaskAttachments($taskid){
        $sql = "select a.* from attachment a
        inner join taskxattachment x on a.AttachmentId = x.AttachmentId
        where x.taskid = ".$taskid;
        $attachments =  DB::select($sql);
        return $attachments;

    }

    public static function deleteAttachment($AttachmentId){
        DB::beginTransaction();
        try{
            DB::select('delete from notexattachment where AttachmentId = ?', [$AttachmentId]);
            DB::select('delete from taskxattachment where AttachmentId = ?', [$AttachmentId]);
            DB::select('delete from attachment where AttachmentId = ?', [$AttachmentId]);


            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

    }

    public static function getAttachmentPath($AttachmentId){
        $path = DB::select('select Path from attachment where AttachmentId = ?', [$AttachmentId]);
        return $path;
    }


    public static function HasChild($tasks, $Parents){
        $exist = false;
        foreach($tasks as $t)   {
            if (($t->HasChild == 0) && ($t->Parents == $Parents)){
                $exist = true;
                break;
            }

        }


        return $exist;

    }


    public static function  linkTasksAjax($TaskIdFrom, $TaskIdTo, $From, $To){



        $sql = 'insert into taskrelation (ParentTaskId, ChildTaskId, TaskRelationTypeId, Lag)  select '.$TaskIdFrom.', '.$TaskIdTo.', TaskRelationTypeId, 0 from taskrelationtype where Code = "'.$From.$To.'"';
        try{
            DB::select($sql);
        }
        catch(Exception $e){
            $m = $e->getMessage();

            if (strpos($m, 'IX_unic') > 0){
                return 'This relation already exist!';
            }
            else
            {
                throw $e;
            }
        }

        return 'OK';
    }

    public static function updatetaskduration ($TaskId, $DurationOffset, $StartDateOffset, $CalendarId, $OrigStartDate, $OrigRealDuration){

        // Nu ne trebuie calenduarul aici, nu se modifica in gantt

        $OrigRealDuration = $OrigRealDuration + $DurationOffset ;

        $O = $OrigRealDuration - 1;



        DB::beginTransaction();
        try{
            DB::select("update task set DateStart = Date_Add('".$OrigStartDate."', INTERVAL ". $StartDateOffset."  DAY) where taskid = ".$TaskId);


            DB::select("update task set DateEnd = DATE_ADD(DateStart, INTERVAL ". $O ." DAY) where taskid = ".$TaskId);
            DB::select("update task set Duration = ".$OrigRealDuration." - getFreeDays(DateStart, DateEnd, CalendarId) where taskid = ".$TaskId);
            DB::select("update task t
                    inner join durationtype dt on t.DurationTypeId = dt.DurationTypeId
                    set work = duration * ifnull(Units, 1)
                    where dt.Code in ('FD', 'FU') and taskid = ".$TaskId );

            DB::select("update task t
                    inner join durationtype dt on t.DurationTypeId = dt.DurationTypeId
                    set Units = work/duration
                    where duration <> 0 and dt.Code in ('FW') and taskid = ".$TaskId );

            DB::select("update task set TaskStatusId = 2 where TaskStatusId = 1 and taskid = ".$TaskId);



            DB::select("call propagateTaskParent(?)",  [$TaskId]);


            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

        return 0;

    }

    public static function getenddate($StartDate, $Duration, $CalendarId){
        $vData = DB::select('select  DATE_FORMAT(GetLastDay(?, ?, ?), "%Y-%m-%d") as EndDate',  [$StartDate, $Duration, $CalendarId]);
        return $vData;


    }

    public static function getprojecttasksGantt_Old($projectid = null, $filter = null){



        $filter = substr($filter, 0, -1);
        $filter = str_replace( ",", " and ", $filter);



        if($projectid != null)
            $sql = "select * from vwtasks where ((HasChild = 1 and projectid = ". $projectid.") or (projectid = ". $projectid;
        else
            $sql = "select * from vwtasks where ProjectState = 1 and ((HasChild = 1) or (1 = 1  ";



        if ($filter != "")
            $sql = $sql . " and ".$filter;

        $sql = $sql.")) order by DateStart, TaskId";

        $tasks =  DB::select($sql);






        $tasklinks =  DB::table('vwtaskrelation');

        if($projectid != null)
            $tasklinks = $tasklinks->where('projectid', $projectid);


        $tasklinks = $tasklinks->get();


        $result = '{
            "data": [';

            foreach($tasks as $t)   {



                // incerc sa sterg parintii orfani :)

                if (($t->HasChild == 1) && (!self::HasChild($tasks, $t->Parents)))
                 continue;



                if ($t->DateStart == "")
                    $startdate = date("d-m-Y");
                else
                    $startdate = $t->DateStartF;

                $result = $result.'{
                    "id": '.$t->TaskId.',
                    "text": "'.$t->Name.' <sup>'.$t->Project.'</sup>",
                    "start_date": "'.$startdate.'",';

                 $duration = 1;
                 $multiplier = 1;
                 $mchar = ""   ;

                if ($t->Duration != ""){
                    $duration = preg_replace("/[^0-9.]/", "", $t->Duration);
                    $mchar = preg_replace("/[0-9.]/", "", $t->Duration);
                    switch ($mchar){
                        case "h":
                        case "H":
                            $multiplier = 1/8;
                            break;
                        case "w":
                        case "W":
                            $multiplier = 7;
                    }
                    $duration = $duration * $multiplier;

                }


                $result = $result.'"duration":'.$duration.',';

                $progress = 0;

                if ($t->Progress > 0)
                    $progress = $t->Progress;

                $result = $result.'"progress":'.$progress;


                if ($t->ParentId > 0)
                    $result = $result.',
                    "parent": '.$t->ParentId ;


                $result = $result.'},';
            };

            $result =substr( $result,0, strlen ($result)- 1);
            $result = $result.']';

            $isFirst = true;
            foreach($tasklinks as $tl){
                if ($isFirst){
                    $result = $result.'
                    ,"links": [';
                }
                $isFirst = false;
                $result = $result.'{
                    "id": '.$tl->Taskrelationid.',
                    "source":'.$tl->ParentTaskId.',
                    "target":'.$tl->ChildTaskId.',
                    "type": "'.($tl->TaskRelationTypeId - 1).'"
                 },';

            }
            if (!$isFirst){
                $result =substr($result,0, strlen ($result)- 1);
                $result = $result.']';
            };

        $result = $result.'}';

        return $result;
    }

    public static function savefile($filepath, $description, $userid, $taskid, $name){
        DB::beginTransaction();
        try{
            $taskid = DB::select(' call insertAttachement (?, ?, ?, ?, ?)', [$taskid, $description, $filepath, $userid, $name]);

            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

    }


    public static function  inserttask($name, $date, $startdate, $enddate, $priority, $duration,
        $projectid, $description,  $parentid, $userid, $responsableId, $taskstatusid, $tasktypeid, $durationtypeid, $autoschedule, $constraintid,
        $work, $units, $CalendarId, $IsEffortDriven,
        $parenttask, $dependencytype, $lag){

        DB::beginTransaction();
        try{
            $taskid = DB::select(' call inserttask (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [$name, $date, $startdate, $enddate, $priority, $duration,
                    $tasktypeid,  $projectid, $description,  $parentid, $userid, $responsableId, $taskstatusid, $durationtypeid, $autoschedule?1:0, $constraintid,
                    $work, $units, $CalendarId, $IsEffortDriven?1:0
                    ]);

            if(isset($parenttask)){
                for ($i = 0; $i < count($parenttask); $i++) {
                    DB::table('taskrelation')->insert(
                        ['TaskRelationTypeId' => $dependencytype[$i], 'ParentTaskId' => $parenttask[$i], 'ChildTaskId' => $taskid[0]->id,  'Lag' => $lag[$i]]
                    );
                }
            }

            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

        return $taskid[0]->id;
    }


    public static function  inserttaskname($name, $parentid, $userid, $projectid){

        DB::beginTransaction();
        try{
            if ($parentid == '')
                $parentid = NULL;
            $taskid = DB::select(' call  inserttaskname   (?, ?, ?, ?)', [$name,  $parentid, $userid, $projectid]);



            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

        return $taskid[0]->id;
    }

    public static function  updatetaskAjax($taskid, $name, $startdate, $duration, $progress){


        DB::beginTransaction();
        try{

            DB::select(' call updateTaskAjax (?, ?, ?, ?)', [$taskid,  $startdate, $duration, $progress]);
            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

    }

    public static function  rescheduleTaskAjax($taskid, $startdate, $duration, $progress){

        $startdateoffset = ceil((strtotime(Date('ymd')) - strtotime($startdate))/ 86400);


        Task::updatetaskduration ($taskid, 0, $startdateoffset, 1,  date( 'ymd', strtotime($startdate)), $duration);
    }


    public static function  unscheduleTaskAjax($taskid){

        DB::beginTransaction();
        try{

            DB::select(' update task set TaskStatusId = 1 where taskid = ?', [$taskid]);
            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }
    }
    public static function SaveItem($fields){
    
        $MasterKey = static::MasterKeyField;

        try {
            if ((!isset($fields[$MasterKey])) || ($fields[$MasterKey]== "")) {

                $sqlValues = self::getFieldValues($fields, static::MasterFields, false, true);

                $sql = "INSERT INTO `task`(`TaskId`, `Name`, `Description`, `ProjectId`, `DateStart`, `DateEnd`, `ReporterId`, `Date`, `TaskTypeId`, 
                                `Duration`, `Priority`, `ParentId`, `ResponsableId`, `TaskStatusId`, `Progress`, `Level`, `Parents`, 
                                `HasChild`, `AutoSchedule`, `ConstraintId`, `DurationTypeId`, `Units`, `Work`, `IsEffortDriven`, 
                                `CalendarId`, `IsStuck`, `CurrentStatus`, Notes)
                            VALUES({$sqlValues})";
                               
                DB::select($sql);

                $sql = " select LAST_INSERT_ID() as ItemId";

                $ItemId = DB::select($sql)[0]->ItemId;


            } else {
                $ItemId = $fields[$MasterKey];

                $sqlValues = self::getFieldValues($fields, static::MasterFields, false, false);

                $sql = "UPDATE `task` SET
                      {$sqlValues} where {$MasterKey} = {$ItemId}";

                DB::select($sql);
              
            }
        }
        catch(\Exception $e){
                DB::rollBack();
                throw $e;
            }

        return self::getItem($ItemId);
    }

     public static function taskDone($TaskId){


        DB::beginTransaction();
        try{
            DB::select("update task set TaskStatusId = 3 where taskid = ".$TaskId);

            DB::select("call propagateTaskParent(?)",  [$TaskId]);


            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

        return 0;
     }

    public static function  getItem($ItemId){
        return DB::select("select * from task where TaskId = {$ItemId}");
        
    }

    public static function gettaskdependencytype(){
        $tasks =  DB::table('taskrelationtype')->orderBy('Name')->get();
        return $tasks;
    }



    public static function addTaskRelation($linksource, $linktarget, $linktype){
        switch ($linktype){
            case 0: $linktype = 1;
                    break;
            case 1: $linktype = 2;
                    break;
            case 2: $linktype = 3;
                    break;
            case 3: $linktype = 4;
                    break;

        }


        $taskrelationid = DB::select(' call insertTaskRelation (?, ?, ?, ?)', [$linksource, $linktarget, $linktype, 0]);

        return $taskrelationid;
    }

    public static function deleteItem($ItemId){
        $sql = "delete from task
                where TaskId = {$ItemId}"  ;
        return DB::select($sql);
    }

    public static function deletetask($taskid){
        DB::beginTransaction();
        try{

            DB::select(' delete from task (?)', [$taskid]);

            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }

    }


    public static function gettaskfilters(){
        $taskfilter =  DB::table('taskfilter');;
        $taskfilter = $taskfilter->orderBy('Name')->get();
        return $taskfilter;
    }

    public static function SaveFilter($filter, $name){
        DB::beginTransaction();
        try{

            DB::select(' insert into taskfilter (Name, Filter) values("'.$name.'", "'.$filter.'")');

            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            throw $e;
        }
    }

    public static function SaveTask($Id, $dateStart, $dateEnd, $duration, $progress){

        $duration = round($duration, 0);
        $dateStart = substr($dateStart, 0, 10);
        $dateEnd = substr($dateEnd, 0, 10);

        $sql = "update task set duration = {$duration}, DateStart = DATE_ADD('{$dateStart}', INTERVAL 1 DAY), 
                            DateEnd = DATE_ADD('{$dateEnd}', INTERVAL 1 DAY), Progress = {$progress} where TaskId = {$Id}";

        DB::select($sql);
    }

    public static function updateGanttTasks($tasks){
        foreach($tasks as $t){
            if ($t['type'] == 'task'){
                self::SaveTask($t['id'], $t['dateStart'], $t['dateEnd'], $t['duration'], $t['progress']);   
            };
            if (array_key_exists('tasks', $t))
                self::updateGanttTasks($t['tasks']);
        }
    }



    public static function getTaskGantt($OrganizationId, $filter){

        if ($filter == "all")
            $filter = " 1 = 1";
        
        if ($filter != '')
            $filter = " and " . $filter ;

        $sql = "select p.Name, p.ProjectId from project p
        inner join elemdictionary ts on ts.ElemDictionaryId = p.ProjectStateId
        where ts.Code = 'Open'  and p.OrganizationId = {$OrganizationId} ";
        
        $projects = DB::select($sql);

        $arr = [];
        $all = [];
        $ids = [];
        foreach($projects as $p){
        //    array_push($ids, ) 
            array_push($arr, array(
                "id" => $p->ProjectId,
                "type" => 'project',
                "label" => $p->Name,
                "synchronized" => true,
                "expanded" => true,
                "progress" => 35,
                "tasks" => self::getprojecttasksgantt($p->ProjectId, null, $all, $filter)
            ));
        };

       $links = self::getTaskConnections($all) ; 
       return [json_encode($arr), $links];
   }


}
