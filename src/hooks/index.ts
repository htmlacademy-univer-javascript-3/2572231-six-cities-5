import { AppDispatch, State } from '@type/state.ts';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
