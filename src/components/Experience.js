import React from 'react';
import './Experience.css'; // Import CSS file for styling
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="work-experience-container">
      <h2>Experience</h2>
      <h4>Where I've interned and worked during my career.</h4>
      <div className="experience-item">
        <div className="experience-title">
        <h3>AI/ML Programmer Analyst</h3>
        <p> <FaBuilding /> ANTS Corp | <FaCalendarAlt /> SEPTEMBER 2024 - Present</p>
        </div>
        <div className="experience-description">
          <p>
          <ul>
            <li>Developed and deployed AI and machine learning models (Hugging Face Transformers, GPT4) to optimize business operations, automate tasks, and reduce manual workload by 40%, contributing to ISO and CMMI appraisal success. </li>
            <li>Designed interactive dashboards with Power BI and advanced DAX calculations, enabling real-time KPI tracking and data-driven decision-making through advanced data analysis using SQL supporting over 180+ clients.</li>
            <li>Enhanced data architecture and managed Apache Server operations, ensuring seamless data access, reducing reporting latency by 25%, and workflow optimization in a highly specialized environment.</li>
          </ul>
          </p>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-title">
        <h3>Research Data Scientist</h3>
        <p><FaBuilding /> Hoosier Community Network | <FaCalendarAlt /> JULY 2024 - SEPTEMBER 2024</p>
        </div>
        <div className="experience-description">
          <p>
          <ul>
            <li>Led research projects utilizing advanced statistical analysis and machine learning, improving forecasting accuracy by 30% and driving actionable insights for strategic planning. </li>
            <li>Analyzed large datasets with Python and SQL, uncovering trends that increased revenue by 25%, and developed interactive dashboards using Power BI and Tableau for real-time KPI monitoring.</li>
            <li>Designed experiments and longitudinal studies to understand customer behaviors, delivering data-driven recommendations that boosted engagement by 20% and supported small businesses in strategic decision-making.</li>
          </ul>
          </p>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-title">
        <h3>Assistant Manager - Business Operations</h3>
        <p><FaBuilding /> INDIANA UNIVERSITY | <FaCalendarAlt /> MAY 2023 - MAY 2024</p>
        </div>
        <div className="experience-description">
          <p>
          <ul>
            <li>Streamlined inventory management and reduced operational costs by 20% through data analysis using SQL, Tableau, enhancing efficiency and minimizing wastage.  </li>
            <li>Designed and implemented dashboards integrating customer data from PeopleSoft CRM using Tableau, providing real-time insights that improved decision-making and boosted customer satisfaction by 25%.</li>
            <li>Implemented a unified data integration system across AWS S3, Redshift, and EC2, leveraging Data Pipeline to automate ETL processes and reduce data discrepancies by 20%.</li>
          </ul>
          </p>
        </div>
      </div>
        <div className="experience-item">
        <div className="experience-title">
          <h3>Software Engineer</h3>
          <p><FaBuilding /> DXC TECHNOLOGY | <FaCalendarAlt /> MAY 2021 - JULY 2022</p>
        </div>
        <div className="experience-description">
          <p>
          <ul>
            <li>Managed and optimized 6+ web portals using IBM WebSphere, ensuring streamlined data access, seamless user experiences, and efficient deployment and maintenance of web applications.  </li>
            <li>Demonstrated expertise in Linux and Unix administration, effectively managing server operating systems and analyzing large datasets with 1000+ in Excel to prioritize server requirements.</li>
            <li>Collaborated with 10+ cross-functional teams to identify user needs, implemented impactful improvements, and earned the prestigious Quarter Champ Award for exceptional performance in a high-responsibility role.</li>
          </ul>
          </p>
        </div>
      </div>
     
    </section>
  );
}

export default Experience;
