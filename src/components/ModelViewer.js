import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ModelViewer = ({ modelPath }) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                {/* Load the 3D model here using a suitable loader */}
                {/* Example: <Model path={modelPath} /> */}
            </Canvas>
        </div>
    );
};

export default ModelViewer;