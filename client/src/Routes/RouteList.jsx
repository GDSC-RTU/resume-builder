import PersonDetails from '../components/Personal Details/personalDetails';
import Education from '../components/Education/education';
import Experience from '../components/Experience/experience.js';
import Project from '../components/Project/Project';

export const RouteList= [
  {
    path: '/education',
    label: 'education',
    component: () => <Education/>,
  },
  {
    path: '/experience',
    label: 'experience',
    component: () => <Experience/>,
  },
  {
    path: '/PersonDetails',
    label: 'PersonDetails',
    component: () => <PersonDetails/>,
  },
  {
    path: '/Project',
    label: 'Project',
    component: () => <Project />,
  },
];
