export const loadModel = (modelPath) => {
    return new Promise((resolve, reject) => {
        const loader = new THREE.GLTFLoader();
        loader.load(
            modelPath,
            (gltf) => {
                resolve(gltf);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
};

export const loadModels = async (modelPaths) => {
    const modelPromises = modelPaths.map(loadModel);
    return Promise.all(modelPromises);
};