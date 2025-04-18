import { SiGithub } from '@icons-pack/react-simple-icons';

import { Link } from '@workspace/next-ui/components/link';
import { Image } from '@workspace/next-ui/components/media';
import type { FooterProps } from '@workspace/ui/components/footer';
import { Footer } from '@workspace/ui/components/footer';
import { cn } from '@workspace/ui/lib/utils';
import { LayoutBar, LayoutContainer } from '@workspace/ui/primitives/layout';

import { config } from '@/configs/app';

function LayoutFooter({ className, ...props }: FooterProps) {
  const copyrightYear = new Date().getFullYear();

  return (
    <Footer
      className={cn('py-fs-3 bg-shell text-shell-foreground/75', className)}
      {...props}
    >
      <LayoutContainer className='flex-row items-end justify-between'>
        <p className='text-caption text-balance'>
          &copy; {copyrightYear},{' '}
          <Link href={`mailto:${config.organization.email}`}>
            {config.organization.name}
          </Link>
          . This code is open source under the{' '}
          <Link href='https://opensource.org/license/MIT'>MIT License</Link>.
        </p>
        <LayoutBar className='justify-end [&_a]:hover:text-shell-foreground [&_a]:hover:[&_img]:opacity-100'>
          <Link href='https://github.com/luckgrid/lg-turbo-ui'>
            <SiGithub />
          </Link>
          {config.author?.name && config.author?.url && (
            <Link
              href={String(config.author.url)}
              className='transition-[opacity]'
            >
              <Image
                className='transition-[opacity] opacity-75 dark:invert'
                variant='icon'
                alt={config.author.name}
                src='/assets/logos/logo.png'
                width={24}
                height={24}
              />
            </Link>
          )}
        </LayoutBar>
      </LayoutContainer>
    </Footer>
  );
}

export { LayoutFooter };
