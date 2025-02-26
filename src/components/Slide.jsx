export default function Slide({ question, content, slideNumber, total, image }) {
    return (
        <article className="w-screen h-screen flex flex-col justify-center items-center snap-start bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
            <div className="max-w-3xl w-full space-y-8">
                <div className="text-sm text-slate-400">
                    {slideNumber} / {total}
                </div>
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    {question}
                </h1>
                <p className="text-xl leading-relaxed text-slate-300">
                    {content}
                </p>
                <img src={image} alt="" />
            </div>
        </article>
    )
}