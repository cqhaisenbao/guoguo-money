import styled from "styled-components";
import React from "react";
import {useTags} from "../useTags";
import {creatId} from "lib/creatId";

const Wrapper = styled.section`
  background: #fff;padding: 12px 16px;flex-grow: 1;display: flex;flex-direction: column;
  justify-content: flex-end;align-items: flex-start;
  >ol{margin: 0 -12px ;
  >li{background: #D9D9D9;border-radius: 18px;display: inline-block;padding: 3px 18px;
    font-size: 14px;margin: 8px 12px;
    &.selected{background: #FF9933;}}}
  >button{
  background: none;border: none;padding: 2px 4px;border-bottom: 1px solid #333;color: #666;margin-top: 8px;}
`;

// 声明TagsSection是一个React函数组件；除了接受默认的children，还接受一个selected，类型是string[]
type Props = {
    value: number[];
    onChange: (selected: number[]) => void;  /*函数的参数和返回值都为空*/
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tags, setTags} = useTags();
    const selectedTagIds = props.value;
    const onAddTag = () => {
        const tagName = window.prompt('新标签的名称为');
        if (tagName !== null) {
            setTags([...tags, {id:creatId(), name: tagName}])
        }
    };
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    };
    const getClass=(tagId:number)=>selectedTagIds.indexOf(tagId)>=0? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => {
                        // 把tag参数传给onToggleTag，传参必须这样写，如果onClick=onToggleTag(tag)会在当时就执行，返回undefined。总结：onClick等于一个可以执行的函数而不是函数返回值，想传参又不执行，箭头函数包起来
                        onToggleTag(tag.id)
                    }} className={getClass(tag.id)}>{tag.name}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
};

export {TagsSection}