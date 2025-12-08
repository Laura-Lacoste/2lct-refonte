'use client';
import { useState } from "react";

export default function Faq({ prestation }) {
        const [activeQuestionId, setActiveQuestionId] = useState(null);
    return (
        <>
        <h2 className='text-[#843E76] flex items-center gap-6 uppercase font-bold text-center md:text-left'><span className="bg-[#843E76] w-24 h-1"></span>Les questions récurrentes<span className="bg-[#843E76] w-24 h-1"></span></h2>

                {prestation.servicesToQuestion?.length > 0 ? (
                prestation.servicesToQuestion.map((element) => (
                    <div key={element.id} className="flex flex-col border-l-4 border-[#E58BD3] p-4 justify-center bg-[#FCFAFC] shadow-sm">
                        <button onClick={() => setActiveQuestionId(activeQuestionId === element.id ? null : element.id)} className="flex justify-between items-center md:w-full font-bold">
                        {element.question}
                        <span className="text-2xl text-[#E58BD3] ml-4">  {activeQuestionId === element.id ? "−" : "+"}</span>
                        </button>
                            {activeQuestionId === element.id && (
        <p className="mt-2 text-sm pt-3">{element.answer}</p>
      )}                        
                    </div>
                )) ) : (
                    <p>Chargement des questions</p>
                )}
        </>
        
    )
}   