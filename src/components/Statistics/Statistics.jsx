import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const bgColor = [
  '#005555',
  '#F8B400',
  '#035397',
  '#1D5C63',
  '#CC704B',
  '#247881',
  '#8D8DAA',
  '#FD5D5D',
  '#CE49BF',
  '#557B83',
];

const Statistics = ({ title, data }) => {
  const randomBg = () => bgColor[Math.floor(Math.random() * bgColor.length)];

  const renderData = () =>
    data.map(({ id, label, percentage }) => (
      <StatItem key={id} bg={randomBg()}>
        <LineText>{label}</LineText>
        <LineText className="subtitle">{percentage}%</LineText>
      </StatItem>
    ));

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StatList>{renderData()}</StatList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border: 1px solid #e4e9ed;
`;

const Title = styled.h2`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const StatList = styled.ul`
  display: flex;
  width: 100%;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  background-color: ${p => (p.bg ? p.bg : '#43919B')};
`;

const LineText = styled.span`
  color: #fff;

  &.subtitle {
    margin-top: 10px;
  }
`;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;