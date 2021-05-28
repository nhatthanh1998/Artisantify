import { configureStore } from '@reduxjs/toolkit';
import styleReducer from '../slicers/style.slicer'
import originImageReducer from '../slicers/origin-image.slicer'
import generatedImageReducer from '../slicers/generated-image.slicer'
import isLoadingReducer from '../slicers/is-loading.slicer'

export const store = configureStore({
  reducer: {
    style: styleReducer,
    originImage: originImageReducer,
    generatedImage: generatedImageReducer,
    isLoading: isLoadingReducer
  },
});
