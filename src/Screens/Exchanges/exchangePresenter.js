import React from "react";
import PropTypes from "prop-types";
import Loading from "../Loding";
import { couldStartTrivia } from "typescript";
import styled from "styled-components";
const Block = styled.div`
  margin-bottom: 30px;
`;
const SmaillBlock = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
`;

const NameBlock=styled.h2`
  font-weight:800;
`
let exArray=[];

const Exs=({ex})=>{
  var newDesc;
  var linksss;
    if(ex.description){
      newDesc=ex.description
      if(newDesc.length>30){
        newDesc=ex.description.slice(0,30);
        newDesc=newDesc+"..."
      }
    }
    if(ex.links?.website){
      linksss=ex.links?.website;
    }else{
      linksss="";
    }
    
    return(
      <Block>
      <NameBlock styles="font-weight:20">{ex.name}</NameBlock>
      <SmaillBlock>{newDesc}</SmaillBlock>
      <a href={linksss}>{linksss}</a>
      </Block>
    )
  
  
}
const Make_ex=(exchanges)=>{
  exchanges.map((ex)=>{
      const exex=<Exs key={ex.id} ex={ex}/>
      exArray.push(exex);
  }
  )
}

const ExchangePresenter = ({ exchange, loading }) => {
  
  if (loading) {
    return <Loading />;
  } else {
    Make_ex(exchange)
    return(<>{exArray}</>);
  }
};
ExchangePresenter.propTypes={
  exchange:PropTypes.array,
  loading:PropTypes.bool
}
export default ExchangePresenter;
