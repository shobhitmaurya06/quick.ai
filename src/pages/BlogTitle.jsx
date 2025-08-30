import { Edit, Hash, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
const BlogTitle = () => {
    const blogCategories = ["General","Technology","Bussiness","Health","Lifestyle","Education","Travel","Food"
    ];
    const submitHandler=async(e)=>{
      e.preventDefault();
    }
    const [selectedCategories,setselectedCategories]=useState(blogCategories[0]);
    const [input ,setInput]=useState("");
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      <form onSubmit={submitHandler}  className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input onChange={(e)=>setInput(e.target.value)}
          type="text"
          value={input}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 "
          placeholder="The Future of artificial intelligence is ....."
          required
        />
        <p className="mt-4 text-sm  font-medium">Categories</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">{blogCategories.map((item, index) => (
  <span
    key={index}  // Add key to optimize rendering
    onClick={() =>setselectedCategories(item)}  
    className={`text-xs px-4 py-1 border rounded-full cursor-pointer 
      ${selectedCategories === item ? 'bg-purple-50 text-purple-700' : 'text-gray-500 border-gray-300'}`}
  >
    {item}
  </span>
))}
</div>
<br />
<button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#65ADFF] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer ">
  <Hash  className="w-5"/>
    Generate Title
</button>
        
      </form>
      {/* right col */}
      <div className="w-full max-w-lg bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8E37EB]"/>
          <h1 className="text-xl font-semibold">Generated Titles</h1>
        </div>
        <div className="flex-1 flex justify-center items-center ">
         <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
          <hash className="w-9 h-9"/>
          <p className="tetx-sm">Enter a topic and click "Generate Title " to get started</p>
          </div> 
        </div>


      </div>
    </div>
  )
}

export default BlogTitle