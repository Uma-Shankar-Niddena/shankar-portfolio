import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Get loading percentage

  return (
    <Html center> {/* ✅ This allows using regular HTML inside Canvas */}
      <h2 style={{ color: "#fff" }}>Loading {Math.round(progress)}%</h2>
    </Html>
  );
};

export default Loader;
