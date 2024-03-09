'use client';
export default function DisplayCard ({color, iconPath, title, value, qtt, time}) {
    const update = new Date(time).toLocaleDateString() + ", " + new Date(time).toLocaleTimeString();
    return (
        <div className="items-center space-y-3 text-center bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <img className="mx-auto max-h-8 m-1" src={iconPath}/>
            <h1 className={`text-4xl font-bold ${color}`}>{value}{qtt}</h1>
            <p className="text-gray-400">Last Update: {update}</p>
        </div>
    )
}