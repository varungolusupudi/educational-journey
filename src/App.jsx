import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import FutureVision from './components/FutureVision';
import FinalSection from './components/FinalSection';
import CourseConnections from './components/CourseConnections';
import Bibliography from './components/Bibliography';
import { storyData } from './data/StoryData';

function App() {
  return (
    <ParallaxProvider>
      <div className="bg-black min-h-screen">
        <HeroSection />
        
        <Timeline />
        
        {storyData.map((story, index) => (
          <StorySection 
            key={story.id}
            data={story}
            index={index}
          />
        ))}

        <Achievements />
        
        <CourseConnections />
        
        <Bibliography />
        
        <FutureVision />
        
        <FinalSection />
      </div>
    </ParallaxProvider>
  );
}

export default App;