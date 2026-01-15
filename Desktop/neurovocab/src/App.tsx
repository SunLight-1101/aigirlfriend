import { useAppStore } from './store/appStore';
import { SettingsPage } from './pages/SettingsPage';
import { LearnPage } from './pages/LearnPage';
import { ReviewPage } from './pages/ReviewPage';
import { DictationPage } from './pages/DictationPage';
import { CompletePage } from './pages/CompletePage';
import { ArchivePage } from './pages/ArchivePage';

function App() {
  const { currentStage } = useAppStore();

  return (
    <>
      {/* 赛博朋克扫描线效果 */}
      <div className="cyber-scanline" />

      {/* 根据当前阶段渲染对应页面 */}
      {currentStage === 'settings' && <SettingsPage />}
      {currentStage === 'learn' && <LearnPage />}
      {currentStage === 'review' && <ReviewPage />}
      {currentStage === 'dictation' && <DictationPage />}
      {currentStage === 'complete' && <CompletePage />}
      {currentStage === 'archive' && <ArchivePage />}
    </>
  );
}

export default App;
