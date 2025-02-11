import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';
import { ThemeSwitch } from '../ui/ThemeSwitch';

// Inline SVG components for the social icons

function TwitterIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.8a4.28 4.28 0 001.32 5.71 4.25 4.25 0 01-1.94-.54v.06a4.28 4.28 0 003.44 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97 8.57 8.57 0 01-5.3 1.83A8.7 8.7 0 012 19.54 12.1 12.1 0 008.29 21c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.55A8.67 8.67 0 0024 5.37a8.51 8.51 0 01-2.54.7z" />
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a2.99 2.99 0 00-2.108-2.112C19.783 3.5 12 3.5 12 3.5s-7.782 0-9.39.574A2.99 2.99 0 00.502 6.186 31.82 31.82 0 000 12a31.82 31.82 0 00.502 5.814 2.99 2.99 0 002.108 2.112C4.218 20.5 12 20.5 12 20.5s7.782 0 9.39-.574a2.99 2.99 0 002.108-2.112A31.82 31.82 0 0024 12a31.82 31.82 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames(
        'flex justify-between items-center p-5 border-b h-[var(--header-height)]',
        {
          'border-transparent': !chat.started,
          'border-bolt-elements-borderColor': chat.started,
        }
      )}
    >
      {/* Left container: Logo and Social Links */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer">
          <div className="i-ph:sidebar-simple-duotone text-xl" />
          <a
            href="https://ez1.dev"
            className="text-2xl font-semibold text-accent flex items-center"
          >
            <img
              src="/logo-light-styled.png"
              alt="logo"
              className="w-[90px] inline-block dark:hidden"
            />
            <img
              src="/logo-dark-styled.png"
              alt="logo"
              className="w-[90px] inline-block hidden dark:block"
            />
          </a>
        </div>
        {/* Social Links */}
        <div className="flex items-center space-x-3">
          <a
            href="https://x.com/ez1dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bolt-elements-textPrimary hover:text-bolt-elements-textHover"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
          <a
            href="https://t.me/ez1dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bolt-elements-textPrimary hover:text-bolt-elements-textHover"
          >
            <SendIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com/@ez1dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bolt-elements-textPrimary hover:text-bolt-elements-textHover"
          >
            <YoutubeIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Right container: ThemeSwitch or Chat Description & Action Buttons */}
      <div>
        {!chat.started ? (
          <div className="mr-1.5">
            <ThemeSwitch />
          </div>
        ) : (
          <>
            <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
              <ClientOnly>{() => <ChatDescription />}</ClientOnly>
            </span>
            <ClientOnly>
              {() => (
                <div className="mr-1">
                  <HeaderActionButtons />
                </div>
              )}
            </ClientOnly>
          </>
        )}
      </div>
    </header>
  );
}
