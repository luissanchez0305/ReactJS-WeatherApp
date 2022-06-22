import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

export const Header = () => {
    const context = useContext(LanguageContext)
    const navigation = [
        {
            name: "Spanish",
            href: "/es",
            src: "https://cdn-icons-png.flaticon.com/512/197/197593.png",
            post: context.es
        },        
        {
            name: "English",
            href: "/en",
            src: "https://cleandye.com/wp-content/uploads/2020/01/English-icon.png",
            post: context.en
        }
    ]
  return (
    <header className="border-b p-3">
        <div className="flex flex-row-reverse">
            {navigation.map((item) => (
                <div
                className="hover:bg-gray-700 cursor-pointer w-20 px-2 py-2 rounded-md"
                onClick={() => item.post()}>
                    <button>
                        <img
                            src={item.src}
                            width={40}
                            alt={item.name}/>
                    </button>
                </div>
            ))}
        </div>  
    </header>
  )
}
