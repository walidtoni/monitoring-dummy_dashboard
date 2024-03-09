'use client';
import DisplayCard from "./DisplayCard";
import { Data } from "../db/Data";
import { useState, useEffect } from "react";

export default function Body() {
    const [data, setData] = useState(Data);
    const [minplus, setMinplus] = useState(0);
    const colors = ['text-red-500', 'text-blue-500', 'text-yellow-400', 'text-purple-500', 'text-orange-500', 'text-green-500', 'text-pink-600', 'text-green-800', 'text-blue-800'];
    useEffect(() => {
        const updater = [0.5, 2.5, 0, 1, 0.1, 0, 0.2, 0.1, 0.2];

        const intervalId = setInterval(() => {
            setData(prevData => prevData.map(item => {
                const val = parseFloat(item.value) + (updater[item.key] * minplus); // Convert to number
                return {
                    ...item,
                    value: val.toFixed(1),
                    lastUpdate: new Date().getTime()
                };
            }));

            setMinplus(prevMinplus => {
                if (prevMinplus === 0) return 1;
                else if (prevMinplus === 1) return -2;
                else if (prevMinplus === -2) return 2;
                else if (prevMinplus === 2) return -1;
                else if (prevMinplus === -1) return 0;
            });
        }, 10000);

        return () => clearInterval(intervalId);
    }, [minplus]);

    const iconPath = [
        '/dashicons/temp.svg',
        '/dashicons/pressure.svg',
        '/dashicons/uv.svg',
        '/dashicons/water.svg',
        '/dashicons/elec.svg',
        '/dashicons/ph.svg',
        '/dashicons/leave.svg',
        '/dashicons/leave.svg',
        '/dashicons/leave.svg',
    ]

    return (
        <div className="w-max grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-6 gap-x-8 py-10 px-4 lg:px-8 xl:px-16 max-w-[1200px] mx-auto mb-40">
            {data.map(item => (
                <DisplayCard color={colors[item.key]} iconPath={iconPath[item.key]} key={item.name} title={item.name} value={item.value} qtt={item.qtt} time={item.lastUpdate} />
            ))}
        </div>
    );
}
