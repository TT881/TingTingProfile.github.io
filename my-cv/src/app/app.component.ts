import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  [x: string]: any;
  FullName: string | null | undefined;
  Name: string | null | undefined;
  PhNo: string | undefined;
  gmail: string | undefined;
  titles: any[] = [];
  skills: any[] = [];
  workExperiencePoints: any[] = [];
  workExperience2Points: any[] = [];
  qualifications: any[] = [];
  languages: any[] = [];
  MyProfile: string | undefined;

  ngOnInit(): void {
    this.FullName = 'Hay Munn Hnin Wai';
    this.Name = '(Ting Ting)';
    this.gmail = 'wutingying.wty@gmail.com';
    this.PhNo = 'Singapore/+65 86497281';
    this.titles = ['Work Experience', 'Education', 'Skills', 'Language'];
    this.MyProfile = 'assets/TingTing.jpg';

    // this.workExperiencePoints = [
    //   'Developed user interfaces for web applications using Angular (Version 11.0), Angular Material library, RxJS, SignalR, and Observable API calls, resulting in enhanced user experience and efficient data management.',
    //   'Implemented real-time data integration using SignalR, ensuring accurate and timely information display.',
    //   'Designed a main dashboard to monitor job progress and display production order lists, allowing users to filter jobs and track progress easily.',
    //   'Integrated alarm and notification management into the UI, providing users with real-time alerts and updates.',
    //   'Facilitated manual creation of production orders through form submissions and Excel file uploads, including form validation logic.',
    //   'Implemented pagination controls in Mat-table to efficiently manage large datasets and optimize performance.',
    //   'Utilized observable API calls to fetch and update data from the database, ensuring seamless data flow and user interaction.',
    //   'Integrated API calls using the Observable and subscribe pattern, handling asynchronous data fetching and updating effectively.',
    // ];

    this.workExperiencePoints = [
      'Front-End Development: Developed user interfaces for web applications using Angular (Version 11.0), Angular Material library, RxJS, SignalR, and Observable API calls, resulting in enhanced user experience and efficient data management.',
      'Implemented real-time data integration using SignalR, ensuring accurate and timely information display.',
      'Designed a main dashboard to monitor job progress and display production order lists, allowing users to filter jobs and track progress easily.',
      'Integrated alarm and notification management into the UI, providing users with real-time alerts and updates.',
      'Utilized observable API calls to fetch and update data from the database, ensuring seamless data flow and user interaction.',
      'Backend Development: Created APIs with Microsoft .NET C# and LINQ to manage data in MSSQL Server.',
      'Project Management: Used Wrike to manage project tasks and deadlines. Assisted project managers with coordinating project elements, including user requirements, UI design, documentation, and unit testing reports.',
      'Bug Fixing: Followed up on bug fixes during UAT and integration tests.',
      'Testing and Deployment: Conducted User Acceptance Testing (UAT) and deployed code on IIS Server. Managed code versions using GitHub.',
      'Documentation and Diagrams: Prepared and maintained application documentation,including UML diagrams (Flow Chat, Class, Sequence) based on user specifications.',
    ];

    this.workExperience2Points = [
      'Coordinated with sub-contractors and customers, effectively managing project timelines and ensuring seamless collaboration between all stakeholders.',
      'Updated Electrical Single-Line Drawings (SLDs) using AutoCAD, maintaining accurate and up-to-date documentation for project reference and future use.',
      'Actively engaged with customers to better understand their needs and provide personalized assistance, resulting in improved customer satisfaction and repeat business.',
      'Managed maintenance contracts and tenders, ensuring compliance with contractual obligations and timely follow-up on deliverables.',
      'Assisted in UPS and various installation projects, ensuring timely and efficient completion while adhering to quality standards and customer requirements.',
    ];
    this.skills = [
      { rating: 8, description: 'Programming: ASP .NET(Web API development)' },
      { rating: 8.5, description: 'Programming: Angular TS' },
      { rating: 7.5, description: 'Database: MSSQL' },
      { rating: 8.5, description: 'Version Control Tool: GitHub' },
      { rating: 8, description: 'Programming: RESTFulAPI' },
      { rating: 8, description: 'Html, CSS' },
      { rating: 8.5, description: 'Project Management: Jira' },
    ];
    this.qualifications = [
      'Certified Professional Scrum Master',
      'Certified AWS Solutions Architect',
      'Certified Angular Developer',
    ];

    this.languages = [
      {
        rating: 'Fluent',
        description: 'English',
      },
      {
        rating: 'Fluent',
        description: 'Mandarin (Simplified/Traditional)',
      },
    ];
  }

  onTitleClick(index: number, event: Event) {
    this['clickedTitleIndex'] = index;
    const element = event.target as HTMLElement;
    this['SelectedTitle'] = element.innerText;
    console.log(this['SelectedTitle']);
  }

  isTitleClicked(index: number) {
    return this['clickedTitleIndex'] === index;
  }
}
