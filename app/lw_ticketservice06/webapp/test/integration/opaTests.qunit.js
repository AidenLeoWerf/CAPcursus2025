sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'aiden/lw/lwticketservice06/test/integration/FirstJourney',
		'aiden/lw/lwticketservice06/test/integration/pages/ProjectsList',
		'aiden/lw/lwticketservice06/test/integration/pages/ProjectsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectsList, ProjectsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('aiden/lw/lwticketservice06') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectsList: ProjectsList,
					onTheProjectsObjectPage: ProjectsObjectPage
                }
            },
            opaJourney.run
        );
    }
);