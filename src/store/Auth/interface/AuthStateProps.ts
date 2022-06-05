import { ReducerStateBaseProps } from '../../Base/interface/ReducerStateBaseProps';

export interface AuthStateProps extends ReducerStateBaseProps {
  isLogged: boolean;
  loggedMessage?: string;
}
