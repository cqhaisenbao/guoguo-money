import Layout from "../components/Layout";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./Money/CategorySection";
import {NoteSection} from "./Money/NoteSection";
import {NumberPadSection} from "./Money/NumberPadSection";
import {TagsSection} from "./Money/TagsSection";

// 添加自定义styled
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0
    });
    type Selected = typeof selected
    //Partial<Selected>表示对象是Selected的一部分
    const onChange = (obj: Partial<Selected>) => {
        setSelected({...selected, ...obj})
    };
    useEffect(()=>{
        console.log(selected);
    },[selected]);
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                         onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note}
                         onChange={note => onChange({note})}/>
            <CategorySection value={selected.category}
                             onChange={category => onChange({category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={amount => onChange({amount})}
                              onOk={() => {
                              }}
            />
        </MyLayout>
    )
}

export default Money