import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

interface ModelProps {
  [key: string]: unknown;
}

export default function Model(props: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const model = useGLTF("/assets/collar.glb");
  return (
		<group ref={group} {...props} dispose={null}>
			<primitive object={model.scene} />
		</group>
  );
}

useGLTF.preload("/assets/collar.glb");