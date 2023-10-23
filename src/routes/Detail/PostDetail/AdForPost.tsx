import { CONFIG } from "site.config"
import Tag from "src/components/Tag"
import { TPost } from "src/types"
import { formatDate } from "src/libs/utils"
import Image from "next/image"
import React from "react"
import styled from "@emotion/styled"

type Props = {
  data: TPost
}

const AdForPost: React.FC<Props> = ({ data }) => {
  return (
    <StyledWrapper>
      <h1 className="title">{data.title}</h1>
      {(data.type[0] !== "Paper" && data.status?.[0] === "Public") && (
        <nav>
          <div className="top">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5254675061228649"
              crossOrigin="anonymous"></script>
            <ins 
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-5254675061228649"
              data-ad-slot="5646577373"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>
        </nav>
      )}
    </StyledWrapper>
  )
}

export default AdForPost

const StyledWrapper = styled.div`
  .title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }
  nav {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.gray11};
    > .top {
      display: flex;
      margin-bottom: 0.75rem;
      gap: 0.75rem;
      align-items: center;
      .author {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
      .hr {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        align-self: stretch;
        width: 1px;
        background-color: ${({ theme }) => theme.colors.gray10};
      }
      .date {
        margin-right: 0.5rem;

        @media (min-width: 768px) {
          margin-left: 0;
        }
      }
    }
    > .mid {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      .tags {
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        gap: 0.5rem;
        max-width: 100%;
      }
    }
    .thumbnail {
      overflow: hidden;
      position: relative;
      margin-bottom: 1.75rem;
      border-radius: 1.5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.gray4};
      padding-bottom: 66%;

      @media (min-width: 1024px) {
        padding-bottom: 50%;
      }
    }
  }
`
