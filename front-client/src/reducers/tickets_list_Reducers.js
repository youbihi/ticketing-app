import {
  TICKET_UPDATED,
  TICKET_FETCHED,
  TICKET_CREATED,
  TICKET_DELETED,
  TICKET_RESET,
} from '../types';

export default function tickets_list(state = [], action = {}) {
  switch (action.type) {
    case TICKET_UPDATED:
      return {
        aircrafts: [
          ...state.tickets_list.filter(
            (ticket) => ticket.id !== action.ticket.id
          ),
          action.ticket,
        ],
      };
    case TICKET_CREATED:
      return {
        ...state,
        tickets_list: [...state.tickets_list, action.ticket],
      };
    case TICKET_FETCHED:
      return {
        ...state,
        tickets_list: [...state.tickets_list, action.ticket],
      };
    case TICKET_RESET:
      return [];
    case TICKET_DELETED:
      return {
        tickets_list: [
          ...state.tickets_list.filter(
            (ticket) => ticket.id !== action.aircraftID
          ),
        ],
      };
    default:
      return state;
  }
}
