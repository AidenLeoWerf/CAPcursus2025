 

namespace mynsdb;

using {cuid, managed} from '@sap/cds/common';
using {myns.commons as common} from './commontypes';


    entity Projects : managed {
        key ID : common.Guid;
        Name       : String(100);
        Client     : String(100);
        StartDate  : Date;
        EndDate    : Date;
        Budget     : Decimal(15,2);

        // Many-to-Many Relationship handled via EmployeeProjects entity
        Employees : Association to many EmployeeProjects on Employees.Project.ID = ID;

        // A project can have multiple incidents (Tickets)
        Incidents : Association to many Incidents on Incidents.Project.ID = ID;
    }    

    entity Employees : managed {
        key ID     :  common.Guid;
        FirstName  : String(50);
        LastName   : String(50);
        Email      : String(100);
        Phone      : String(20);
        Role       : common.roleMenu;

        // Many-to-Many Relationship handled via EmployeeProjects entity
        Projects : Association to many EmployeeProjects on Projects.Employee.ID = ID;
    }

    entity Incidents : managed {
        key ID        : common.Guid;
        key Project   : Association to one Projects;  // Unique project assignment
        key Employee  : Association to one Employees; // Unique employee assignment
        Description   : String(255);
        Priority      : common.ticketPriority;
        CreatedOn     : DateTime;
        UpdatedOn     : DateTime;

        // Each Ticket has details stored in Transaction
        Details : Association to one IncidentDetails on Details.Incident.ID = ID;
    }

    entity EmployeeProjects {
        key Employee : Association to one Employees;
        key Project  : Association to one Projects;
        AssignedOn   : DateTime;
        UpdatedOn    : DateTime;
        Role         : String(50);
    }

    entity IncidentDetails : managed {
        key Incident        : Association to one Incidents;
        ReportedBy        : String(100);
        ReportedOn        : DateTime;
        Status            : common.ticketStatus;  // Status column as per requirement
        ResolutionNotes   : String(500);
        LastUpdatedBy     : String(100);
    }