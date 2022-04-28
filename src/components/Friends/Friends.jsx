import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Friends = ({ data }) => {
  const renderList = () =>
    data.map(({ id, isOnline, name, avatar }) => (
      <Item key={id}>
        <OnlineLabel isOnline={isOnline} />
        <Avatar src={avatar} alt={name} />
        <Title>{name}</Title>
      </Item>
    ));

  return <Wrapper>{data && renderList()}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #557b83;
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const OnlineLabel = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${p => (p.isOnline ? '#357C3C' : '#890F0D')};
  border-radius: 50%;
`;

const Avatar = styled.img`
  width: 40px;
  margin-left: 10px;
`;

const Title = styled.span`
  margin-left: 10px;
`;

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Friends;
