// 2-2. Web APIs 이해 - 브라우저 좌표

// 설명: 브라우저 좌표는 사용되는 곳이 매우 많기에 알면 좋습니다.

/**
 * 브라우저 좌표:
 *  - client X, Y: 클라이언트 기준(2-2.js 브라우저 구조 부분에서 설명한  Document(Window 보다 작은, 페이지가 표기되는 부분)에서 떨어져 있는 부분에 대한 좌표)
 *  - page X, Y: 페이지 기준(숨겨져 있는 부분까지 포함한 부분에 대한 좌표)
 *
 * 요소 좌표:
 *  - Element.getBoundingClientRect(): 선택된 Element 요소의 좌표
 */
