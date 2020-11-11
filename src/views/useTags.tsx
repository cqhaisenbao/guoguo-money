import {useState} from "react";
import {creatId} from "lib/creatId";

//封装一个自定义Hook：用use开头就是自定义Hook，在自定义函数里面使用useState等等，然后把读写接口放到外面去
const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>
    ([
        {id: creatId(), name: '衣'},
        {id: creatId(), name: '食'},
        {id: creatId(), name: '住'},
        {id: creatId(), name: '行'},
    ]);
    return {
        tags,
        setTags
    }
};

export {useTags}
