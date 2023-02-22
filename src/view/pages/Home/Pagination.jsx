import {Text} from '@rneui/base';
import {Button} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {DOTS, usePagination} from '../../../helpers/pagination'
import AntIcon from "react-native-vector-icons/AntDesign";

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onCurrent = page => () => {
    onPageChange(page);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <View style={{flexDirection: 'row'}}>
      {/* Left navigation arrow */}
      <View>
        <Button
          type={'outline'}
          onPress={onPrevious}
        >
          <AntIcon
            name="left"
            size={15}
          />
        </Button>
      </View>
      {paginationRange.map(pageNumber => {

        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <Text >&#8230;</Text>;
        }

        // Render our Page Pills
        return (
          <Button type={'outline'} onPress={onCurrent(pageNumber)}>
            <Text h4={pageNumber === currentPage ? true : false}>
              {pageNumber}
            </Text>
          </Button>
        );
      })}
      {/*  Right Navigation arrow */}
      <View>
        <Button type={'outline'} onPress={onNext}>
          <AntIcon
            name="right"
            size={15}
          />
        </Button>
      </View>
    </View>
  );
};

export default Pagination;
