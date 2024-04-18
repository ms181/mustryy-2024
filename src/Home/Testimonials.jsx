import person1 from "../assets/person-1.jpg";
import person2 from "../assets/person-2.jpg";
import person3 from "../assets/person-3.jpg";
import person4 from "../assets/person-4.jpg";

const Testimonials = () => {
  return (
    <div className="py-2 mt-20 px-14">
      <h1 className="mb-8 font-bold text-4xl text-center ">
        What do our{" "}
        <span className="bg-stone-900 text-white px-3 rounded-sm">clients</span>{" "}
        say about us?
      </h1>
      <div className="flex gap-2 h-[500px]">
        <div className="flex flex-col w-1/2 h-full gap-2">
          <div className="bg-stone-100 border border-stone-200 rounded-sm p-4">
            <div className="flex items-center">
              <img
                src={person1}
                className="w-12 h-12 object-cover rounded-full border border-stone-200"
                alt="i"
              />
              <div className="pt-2 pl-2">
                <h4 className="font-bold leading-3">Marry Williams</h4>
                <span className="text-xs leading-3 text-stone-500">
                  CEO, Argon Inc
                </span>
              </div>
            </div>
            <p className="text-stone-800 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              pariatur fugiat. Tenetur accusantium nostrum unde nam autem fugit,
              totam sit animi magnam ea quisquam, laborum placeat quod, dolores
              minus obcaecati vitae molestiae cum iusto error provident. Debitis
              accusamus tempore consequatur ducimus sunt fugit aut vero
              blanditiis, in tempora necessitatibus quas harum reprehenderit,
              praesentium, placeat aspernatur. Quod eligendi placeat dicta
              consequuntur explicabo exercitationem corrupti sint cumque
              perferendis officiis hic quos quis voluptate excepturi debitis
              sequi eos ab rem, reiciendis libero quisquam!
            </p>
          </div>
          <div className="bg-stone-100 border border-stone-200 rounded-sm p-4">
            <div className="flex items-center">
              <img
                src={person2}
                className="w-12 h-12 object-cover rounded-full border border-stone-200"
                alt="i"
              />
              <div className="pt-2 pl-2">
                <h4 className="font-bold leading-3">Jack Athur</h4>
                <span className="text-xs leading-3 text-stone-500">
                  CEO, Argon Inc
                </span>
              </div>
            </div>
            <p className="text-stone-800 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              pariatur fugiat. Tenetur accusantium nostrum unde nam autem fugit,
              totam sit animi magnam ea quisquam, laborum placeat quod, dolores
              minus!
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-full gap-2">
          <div className="bg-stone-100 border border-stone-200 rounded-sm p-4">
            <div className="flex items-center">
              <img
                src={person3}
                className="w-12 h-12 object-cover rounded-full border border-stone-200"
                alt="i"
              />
              <div className="pt-2 pl-2">
                <h4 className="font-bold leading-3">Rose Inhert</h4>
                <span className="text-xs leading-3 text-stone-500">
                  CEO, Argon Inc
                </span>
              </div>
            </div>
            <p className="text-stone-800 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              pariatur fugiat. Tenetur accusantium nostrum unde nam autem fugit,
              totam sit animi magnam ea quisquam, laborum placeat quod, dolores
              minus!
            </p>
          </div>
          <div className="bg-stone-100 border border-stone-200 rounded-sm p-4">
            <div className="flex items-center">
              <img
                src={person4}
                className="w-12 h-12 object-cover rounded-full border border-stone-200"
                alt="i"
              />
              <div className="pt-2 pl-2">
                <h4 className="font-bold leading-3">John Vicker</h4>
                <span className="text-xs leading-3 text-stone-500">
                  CEO, Argon Inc
                </span>
              </div>
            </div>
            <p className="text-stone-800 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              pariatur fugiat. Tenetur accusantium nostrum unde nam autem fugit,
              totam sit animi magnam ea quisquam, laborum placeat quod, dolores
              minus obcaecati vitae molestiae cum iusto error provident. Debitis
              accusamus tempore consequatur ducimus sunt fugit aut vero
              blanditiis, in tempora necessitatibus quas harum reprehenderit,
              praesentium, placeat aspernatur. Quod eligendi placeat dicta
              consequuntur explicabo exercitationem corrupti sint cumque
              perferendis officiis hic quos quis voluptate excepturi debitis
              sequi eos ab rem, reiciendis libero quisquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
