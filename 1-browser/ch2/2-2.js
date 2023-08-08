// 2-2. Web APIs 이해 - Browser 구조 분석

// 설명: 웹 페이지를 열게 되면 Window라는 객체 내부에 여러 객체가 들어있고 해당 객체들은 각각의 APIs를 제공하고 있습니다.

/**
 * 브라우저 객체 모델 트리:
 *  - Window
 *   - DOM
 *    - document
 *    - ..
 *   - BOM
 *    - navigator
 *    - location
 *    - fetch
 *    - storage
 *    - ..
 *   - JavaScript
 *    - Array
 *    - Map
 *    - Date
 *    - ..
 *
 *
 *
 * 브라우저 구조:
 *  - Window: 브라우저 전체 창
 *  - Document: Window 보다 작은, 페이지가 표기되는 부분
 *
 *
 * Window 객체에서 자주 활용되는 APIs 분류(종류):
 *  - size
 *  - scroll
 *  - load
 */
