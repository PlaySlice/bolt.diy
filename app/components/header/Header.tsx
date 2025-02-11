import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';
import { ThemeSwitch } from '../ui/ThemeSwitch';
import { Twitter, Send, Youtube } from 'lucide-react';

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
            {/* Optionally, you could use an icon component instead of these images */}
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
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://t.me/ez1dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bolt-elements-textPrimary hover:text-bolt-elements-textHover"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com/@ez1dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bolt-elements-textPrimary hover:text-bolt-elements-textHover"
          >
            <Youtube className="h-4 w-4" />
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
