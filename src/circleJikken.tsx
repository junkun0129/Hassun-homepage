import { useState } from "react";
function CircleJikken() {
  const [unitNum] = useState(12);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 150,
    y: 50,
  });
  const [isDragging, setIsDragging] = useState(false);

  function getPointOnCircle(
    xc: number,
    yc: number,
    r: number,
    unitNum: number,
    index: number
  ) {
    const anglePerSegment = (2 * Math.PI) / unitNum;
    const theta = index * anglePerSegment;

    const x = xc + r * Math.cos(theta);
    const y = yc + r * Math.sin(theta);

    return { x, y };
  }

  function findNearestPoint(xp: number, yp: number) {
    const cx = 100;
    const cy = 100;
    const radius = 100;
    let nearestPoint = { x: 0, y: 0 };
    let minDistance = Infinity;

    for (let i = 0; i < unitNum; i++) {
      const point = getPointOnCircle(cx, cy, radius, unitNum, i);
      const distance = Math.sqrt((point.x - xp) ** 2 + (point.y - yp) ** 2);
      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = point;
      }
    }
    return nearestPoint;
  }

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const { x, y } = findNearestPoint(e.clientX, e.clientY);
      setPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const nearestPoint = findNearestPoint(position.x, position.y);
    setPosition(nearestPoint);
  };

  return (
    <>
      <div
        className="w-[200px] h-[200px] border border-black"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" stroke="black" fill="none" />
          <circle fill="white" cx="100" cy="100" r="98" />
          {Array.from({ length: unitNum }).map((_, i) => {
            const { x, y } = getPointOnCircle(100, 100, 100, unitNum, i);
            return <circle key={i} cx={x} cy={y} r="5" fill="blue" />;
          })}
          <circle
            fill="red"
            cx={position.x}
            cy={position.y}
            r="10"
            onMouseDown={handleMouseDown}
          />
        </svg>
      </div>
    </>
  );
}

export default CircleJikken;
