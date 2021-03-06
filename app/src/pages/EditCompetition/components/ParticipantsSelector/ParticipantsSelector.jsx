import React, { useMemo, useCallback } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AutoSuggestInput from '../../../../components/AutoSuggestInput';
import { getSearchResults } from '../../../../redux/selectors/players';
import searchAction from '../../../../redux/modules/players/actions/search';
import './ParticipantsSelector.scss';

function mapToSuggestion(player) {
  return { label: player.username, value: player.username };
}

function ParticipantsSelector({ participants, onParticipantAdded, onParticipantRemoved }) {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => getSearchResults(state));

  const suggestions = useMemo(() => searchResults.map(s => mapToSuggestion(s)), [searchResults]);

  const searchPlayer = _.debounce(username => dispatch(searchAction({ username })), 500);

  const handleInputChange = text => {
    if (text && text.length) {
      searchPlayer(text);
    }
  };

  const handleSelection = username => {
    onParticipantAdded(username);
  };

  const handleDeselection = username => {
    onParticipantRemoved(username);
  };

  const onInputChange = useCallback(handleInputChange, []);
  const onSelected = useCallback(handleSelection, []);
  const onDeselected = useCallback(handleDeselection, []);

  return (
    <div className="participants-selector">
      <AutoSuggestInput
        suggestions={suggestions}
        onInput={onInputChange}
        onSelected={onSelected}
        placeholder="Search players"
        clearOnSelect
      />
      <ul className="participants-selector__list">
        {participants && participants.length > 0 ? (
          participants.map(l => (
            <li key={l}>
              <button className="participant-btn" type="button" onClick={() => onDeselected(l)}>
                {l}
                <img className="participant-btn__icon" src="/img/icons/clear.svg" alt="x" />
              </button>
            </li>
          ))
        ) : (
          <span className="empty-selected">No players selected</span>
        )}
      </ul>
    </div>
  );
}

ParticipantsSelector.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.string).isRequired,
  onParticipantAdded: PropTypes.func.isRequired,
  onParticipantRemoved: PropTypes.func.isRequired
};
export default ParticipantsSelector;
