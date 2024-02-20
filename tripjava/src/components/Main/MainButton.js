import React, { useState, useRef, useEffect } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import '../../styles/style.scss';
import regions from './MainRegion';
import { useNavigate } from 'react-router-dom';

const sc = {
  lat: 38.2073706,
  lng: 128.5922597,
};

const MainButton = () => {
  const [showSearch, setShowSearch] = useState(false); // 검색창 표시 상태
  const [inputValue, setInputValue] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(regions);
  const containerRef = useRef();
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  // '만들기' 버튼 클릭 핸들러
  const handleCreateClick = () => {
    // '/planner' 페이지로 이동하면서 선택된 위치의 데이터 전달
    navigate('/planner', { state: { selectedLocation: sc } });
  };
  // 외부 클릭 감지를 위한 함수
  useEffect(() => {
    setFilteredLocations(
      regions.filter((location) =>
        location.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue]);

  return (
    <div className="main_container" ref={containerRef}>
      <div className="main_explainbox">
        <h1>
          행복한 여행의 첫 시작,
          <br />
          TRIPJAVA와 함께
        </h1>
        <h4>TRIPJAVA를 사용해 여행 계획을 손쉽게 세워보세요!</h4>
      </div>
      <div className="main_buttonbox">
        {!showSearch ? (
          <button className="main_clickbtn" onClick={() => setShowSearch(true)}>
            TRIPJAVA 시작하기
            {/* <img
              src="/static/logo_trip_java_pin.svg"
              alt="pin"
              className="pin"
            /> */}
          </button>
        ) : (
          // 원본
          <Combobox
            className="main_combobox_container"
            onSelect={(item) => setInputValue(item)}
            aria-labelledby="combobox-label"
          >
            <ComboboxInput
              placeholder="어디로 떠나고 싶나요?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ComboboxPopover>
              <ComboboxList>
                {filteredLocations.map((location, index) => (
                  <ComboboxOption key={index} value={location} />
                ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        )}
      </div>
      <button onClick={handleCreateClick}>만들기</button>
    </div>
  );
};

export default MainButton;