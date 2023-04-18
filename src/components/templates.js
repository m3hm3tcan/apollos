import React from "react";
import TemplateCard from "./TemplateCard";
import {templates } from '../data';
const Templates = () => {
  return (
    <section class="bg-white dark:bg-gray-900" id="templates">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          From our template list
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {templates.map((tempalte,index)=>(
                <TemplateCard key={index}  imgUrl={tempalte.imgUrl} name={tempalte.name} description={tempalte.description} url={tempalte.url}/>
            ))} 
           

        </div>
      </div>
    </section>
  );
};

export default Templates;
