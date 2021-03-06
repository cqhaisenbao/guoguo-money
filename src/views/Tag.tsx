import React from "react";
import {useParams} from 'react-router-dom';
import {useTags} from "./useTags";
import Layout from "components/Layout";
import Icon from "../components/icon";
import {Button} from "../components/Button";
import styled from "styled-components";

type Params = {
    id: string
}
const Topbar=styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
  >div{
  width: 16px;
  height: 16px;
  }
`;


const Tag: React.FC = (props) => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <Icon name='left'/>
                <span>编辑标签</span>
                <div/>
            </Topbar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder={"标签名"}/>
                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    )
};

export {Tag}