import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';



const Computers = ( { isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
      <mesh>
       
      </mesh>
  );
};


    const ComputersCanvas = () => {
    
    
        return (
      <div></div>
      )
    };

    export default ComputersCanvas;

