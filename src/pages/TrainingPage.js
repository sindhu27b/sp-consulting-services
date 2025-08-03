import React from 'react';
import PageHero from '../components/common/PageHero';

const TrainingPage = () => {
  const trainingAreas = [
    { title: "Cloud Platforms (AWS, Azure, GCP)", description: "Master the cloud to build scalable, cost-effective infrastructure." },
    { title: "DevOps & Automation", description: "Ship better software, faster, by automating your development pipeline." },
    { title: "Cybersecurity Fundamentals", description: "Protect your data and systems by empowering your team to identify threats." },
    { title: "Agile & Scrum Methodologies", description: "Improve team collaboration and deliver projects with greater efficiency." },
    { title: "Data Science & BI", description: "Turn raw data into actionable insights that drive business decisions." },
    { title: "Full-Stack Development", description: "Build end-to-end web applications with modern programming languages." },
  ];
  
  return (
    <>
      <PageHero title="Professional Technology Training" />
      <div className="py-16">
        <div className="container mx-auto px-6">
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Invest in your most valuable asset: your people. Our courses are designed by industry experts to equip your teams with practical, in-demand skills that boost productivity and drive innovation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingAreas.map(area => (
              <div key={area.title} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-slate-800 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingPage;
