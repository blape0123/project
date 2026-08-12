// 업무 관리 시스템 JavaScript
// 기본 기능은 HTML의 인라인 스크립트에서 처리됩니다.
// 이 파일은 추가 API 통합용 예약 공간입니다.

console.log('📊 업무 관리 시스템이 로드되었습니다.'); +
      JSON.stringify(data, null, 2);
  } catch (error) {
    result.textContent = "직접 요청 실패\n\n" + error.message;
  }
}

async function requestProxy() {
  try {
    const target = targetsSelect?.value || "target";
    result.textContent = "Proxy 서버를 통해 요청 중...";
    const response = await fetch(`/proxy/${target}/api/data`);
    const data = await response.json();

    result.textContent =
      "PROXY REQUEST\n\n" +
      JSON.stringify(data, null, 2);
  } catch (error) {
    result.textContent = "Proxy 요청 실패\n\n" + error.message;
  }
}

  // initialize
  refreshTargets();