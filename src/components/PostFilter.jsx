import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({ filter, setFilter }) => {

  return (
    <div>
    
      <MyInput
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
        placeholder="Поиск"
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        dafaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "title", name: "По описанию" },
        ]}
      />
    </div>
  );

};

export default PostFilter;
