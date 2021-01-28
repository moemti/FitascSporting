gantt.dataSource = [
    {
        id:'project1',
        type: 'project',
        label: 'Office Preparation',
        synchronized: true,
        expanded: true,
        progress: 35,
        tasks: [
            {
                label: 'Office Inspection',
                synchronized: true,
                expanded: true,
                progress: 55,
                type: 'project',
                connections: [
                    {
                        target: 'furnitureInArrangement',
                        type: 1
                    }
                ],
                tasks: [
                    {
                        label: 'Interior Arrangement',
                        dateStart: '2021-04-02',
                        duration: 3,
                        type: 'task'
                    },
                    {
                        label: 'Climate Control Installation',
                        dateStart: '2021-04-05',
                        duration: 2,
                        type: 'task'
                    }
                ]
            },
            {
                id: 'furnitureInArrangement',
                label: 'Furniture Arrangement',
                synchronized: true,
                progress: 55,
                type: 'project',
                connections: [
                    {
                        target: 'employeePositioning',
                        type: 1
                    }
                ],
                tasks: [
                    {
                        label: 'Workstations Positioning',
                        dateStart: '2021-04-08',
                        duration: 2,
                        type: 'task'
                    }
                ]
            },
            {
                id: 'employeePositioning',
                label: 'Employee Positioning',
                synchronized: true,
                expanded: true,
                progress: 50,
                type: 'project',
                tasks: [
                    {
                        label: 'Workplaces Allocation',
                        dateStart: '2021-04-10',
                        duration: 3,
                        progress: 50,
                        connections: [
                            {
                                target: 'workstationsAssembly',
                                type: 1
                            }
                        ],
                        type: 'task'
                    },
                    {
                        id: 'workstationsAssembly',
                        label: 'Workstations Assembly',
                        dateStart: '2021-04-13',
                        duration: 3,
                        progress: 50,
                        connections: [
                            {
                                target: 'workstationsInspection',
                                type: 1
                            }
                        ],
                        type: 'task'
                    },
                    {
                        id: 'workstationsInspection',
                        label: 'Workstations Inspection',
                        dateStart: '2021-04-16',
                        duration: 3,
                        progress: 50,
                        type: 'task'
                    }
                ]
            }
        ]
    },
    {
        type: 'project',
        label: 'Product Release',
        synchronized: true,
        expanded: true,
        progress: 65,
        tasks: [
            {
                label: 'Planning',
                dateStart: '2021-04-02',
                duration: 5,
                progress: 100,
                type: 'task'
            },
            {
                label: 'Development',
                synchronized: true,
                expanded: true,
                progress: 50,
                type: 'project',
                connections: [
                    {
                        target: 'releasev1',
                        type: 1
                    }
                ],
                tasks: [
                    {
                        label: 'Developing/Coding',
                        dateStart: '2021-04-03',
                        duration: 5,
                        type: 'task',
                        progress: 100,
                        connections: [
                            {
                                target: 'betaRelease',
                                type: 1
                            }
                        ]
                    },
                    {
                        id: 'betaRelease',
                        label: 'Beta Release',
                        dateStart: '2021-04-08',
                        type: 'milestone',
                        connections: [
                            {
                                target: 'integrateSystem',
                                type: 1
                            }
                        ]
                    },
                    {
                        id: 'integrateSystem',
                        label: 'Integration',
                        dateStart: '2021-04-08',
                        duration: 4,
                        type: 'task',
                        progress: 100,
                        connections: [
                            {
                                target: 'test',
                                type: 1
                            }
                        ]
                    },
                    {
                        id: 'test',
                        label: 'Testing',
                        dateStart: '2021-04-12',
                        duration: 3,
                        type: 'task',
                        progress: 15,
                        connections: [
                            {
                                target: 'marketing',
                                type: 1
                            }
                        ]
                    },
                    {
                        id: 'marketing',
                        label: 'Marketing and Sales',
                        dateStart: '2021-04-15',
                        duration: 4,
                        type: 'task'
                    }
                ]
            },
            {
                label: 'Feedback Analysis and QA',
                dateStart: '2021-04-02',
                duration: 4,
                type: 'task',
                progress: 75,
                connections: [
                    {
                        target: 'design',
                        type: 1
                    }
                ]
            },
            {
                id: 'design',
                label: 'Design',
                synchronized: true,
                expanded: true,
                progress: 25,
                type: 'project',
                tasks: [
                    {
                        label: 'Database',
                        dateStart: '2021-04-06',
                        duration: 4,
                        progress: 50,
                        type: 'task'
                    },
                    {
                        label: 'User Interface',
                        dateStart: '2021-04-08',
                        duration: 4,
                        progress: 10,
                        type: 'task'
                    }
                ]
            },
            {
                label: 'Documentation',
                dateStart: '2021-04-11',
                duration: 5,
                type: 'task',
                connections: [
                    {
                        target: 'releasev1',
                        type: 1
                    }
                ]
            },
            {
                id: 'releasev1',
                label: 'Release v1',
                dateStart: '2021-04-19',
                type: 'milestone'
            }
        ]
    }
];