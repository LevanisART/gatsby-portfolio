import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import { node } from 'prop-types';
import SEO from "../components/seo"
import Img from "gatsby-image"

const ProjectTitle = styled.h1`
  color: #000;
  font-size: 29px;
  font-weight: 400;
  @media(max-width: 575.98px) {
    font-size: 25px;
    font-weight: 500;
  }
`;

const ProjectDescription = styled.div`
  margin-top: 30px;
  color: #484848;
  font-size: 15px;
  font-weight: 300;
  line-height: 29px;
`;

const ProjectDetailsTitle = styled.span`
  font-size: 17px;
  font-weight: 500;
  line-height: 29px;
`;

const ProjectDetailsDescription = styled.span`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 300;
`;

const Social = styled.a`
  margin-right: 10px;
  padding: 3px;
`;

const ViewProject = styled.a`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1.5px;
  display: flex;
  color: #000;
  &:hover {
    color: #000;
  }
  &::before {
    content: '';
    display: flex;
    width: 25px;
    margin-top: 7.5px;
    height: 3px;
    background: #000;
    border-radius: 50rem;
    margin-right: 14px;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post.fields.slug);
  console.log(post);
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <ProjectTitle>{post.frontmatter.title}</ProjectTitle>
        <ProjectDescription dangerouslySetInnerHTML={{ __html: post.html }}></ProjectDescription>
        <div className="project-details mt-5 d-flex align-items-center justify-content-between">
          {post.frontmatter.client && (
            <div className="project-details-item d-flex flex-column">
              <ProjectDetailsTitle>Client</ProjectDetailsTitle>
              <ProjectDetailsDescription>{post.frontmatter.client}</ProjectDetailsDescription>
            </div>
          )}
          {post.frontmatter.date && (
            <div className="project-details-item d-flex flex-column">
            <ProjectDetailsTitle>Project Date</ProjectDetailsTitle>
              <ProjectDetailsDescription>{post.frontmatter.date}</ProjectDetailsDescription>
            </div>
          )}
          {post.frontmatter.category && (
            <div className="project-details-item d-flex flex-column">
            <ProjectDetailsTitle>Category</ProjectDetailsTitle>
              <ProjectDetailsDescription>{post.frontmatter.category}</ProjectDetailsDescription>
            </div>
          )}
          
          {post.frontmatter.sharebuttons && (
            <div className="project-details-item d-flex flex-column">
              <ProjectDetailsTitle>Share This</ProjectDetailsTitle>
              <div className="d-flex align-items-center">
                <Social href="/">
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.26473 11.998V6.53405H6.10805L6.38204 4.39474H4.26473V3.03208C4.26473 2.41476 4.43673 1.99209 5.32272 1.99209H6.44538V0.0847787C5.89914 0.0262399 5.35008 -0.00202533 4.80073 0.000112776C3.17141 0.000112776 2.05275 0.99477 2.05275 2.82075V4.39074H0.221436V6.53005H2.05675V11.998H4.26473Z" fill="black"/><defs><clipPath id="clip0"><rect width="6.6666" height="12" fill="white"/></clipPath></defs></svg>
                </Social>
                <Social href="/">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2 2.30666C12.7146 2.52146 12.1863 2.67604 11.6422 2.73625C12.2071 2.39199 12.6302 1.84811 12.832 1.20666C12.3019 1.53014 11.7211 1.75696 11.1155 1.87708C10.8624 1.59952 10.5563 1.3784 10.2162 1.2275C9.87618 1.07661 9.50947 0.999167 9.13895 1.00001C7.63985 1.00001 6.43423 2.24646 6.43423 3.77604C6.43423 3.99083 6.45961 4.20563 6.50085 4.41228C4.25617 4.29187 2.2542 3.19187 0.923255 1.5077C0.680742 1.93259 0.553657 2.41638 0.555222 2.90873C0.555222 3.87205 1.03271 4.72145 1.76085 5.22101C1.33175 5.20368 0.912694 5.08269 0.537772 4.8679V4.90208C0.537772 6.25104 1.46737 7.36894 2.70631 7.62604C2.47369 7.68802 2.23438 7.71973 1.99404 7.72042C1.81795 7.72042 1.65139 7.70252 1.48324 7.67811C1.82589 8.77811 2.8237 9.57707 4.01187 9.60311C3.08227 10.35 1.91789 10.7893 0.653575 10.7893C0.426728 10.7893 0.21733 10.7812 0 10.7552C1.19928 11.5444 2.62223 12 4.15464 12C9.12943 12 11.8516 7.77249 11.8516 4.10311C11.8516 3.9827 11.8516 3.86228 11.8437 3.74187C12.3703 3.34646 12.832 2.85666 13.2 2.30666Z" fill="black"/></svg>
                </Social>
                <Social href="/">
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.9511 12V3.90362H0.164413V12H2.9511ZM1.55812 2.79753C2.52989 2.79753 3.13476 2.17583 3.13476 1.3989C3.11666 0.604451 2.52992 0 1.57656 0C0.623344 0 0 0.604463 0 1.3989C0 2.17586 0.604729 2.79753 1.53993 2.79753H1.55803H1.55812ZM4.49353 12H7.28022V7.47858C7.28022 7.2366 7.29832 6.99488 7.37191 6.8219C7.57337 6.33843 8.03189 5.83769 8.80169 5.83769C9.81007 5.83769 10.2135 6.58016 10.2135 7.66856V11.9999H13V7.35755C13 4.87066 11.6252 3.71354 9.79172 3.71354C8.28842 3.71354 7.62837 4.525 7.26167 5.07769H7.28028V3.90345H4.49359C4.53016 4.66317 4.49359 11.9998 4.49359 11.9998L4.49353 12Z" fill="black"/></svg>
                </Social>
                <Social href="/">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.13311e-05 6.30453C4.13311e-05 5.78572 0.088429 5.29558 0.262605 4.83812C0.429017 4.3938 0.676259 3.986 0.991155 3.63646C1.30541 3.2915 1.66503 2.99321 2.05961 2.75021C2.46445 2.49891 2.90273 2.30932 3.36073 2.18739C3.82425 2.0625 4.30154 1.99952 4.78078 2C5.52103 2 6.20993 2.16071 6.8488 2.4808C7.47932 2.79505 8.016 3.27732 8.40273 3.87719C8.80178 4.48736 9 5.17755 9 5.9471C9 6.40856 8.95581 6.86002 8.86547 7.30147C8.77677 7.74268 8.63577 8.1711 8.44563 8.57716C8.26439 8.97024 8.02742 9.33362 7.74242 9.65546C7.45599 9.97219 7.10912 10.2251 6.72336 10.3983C6.30457 10.5867 5.85152 10.6814 5.3943 10.6764C5.07649 10.6764 4.75934 10.5997 4.44608 10.4457C4.13282 10.2923 3.90795 10.0816 3.77277 9.8115C3.72533 9.99889 3.66034 10.2696 3.5739 10.6237C3.49071 10.9772 3.43482 11.2052 3.41012 11.3086C3.38412 11.4113 3.33603 11.5827 3.26584 11.8201C3.21824 11.9957 3.15717 12.1671 3.08322 12.3329L2.85965 12.7823C2.76296 12.9752 2.65487 13.1618 2.53599 13.3412C2.41836 13.5159 2.27278 13.7246 2.09925 13.9647L2.00242 14L1.93807 13.928C1.86853 13.1724 1.83279 12.7203 1.83279 12.5709C1.83279 12.1288 1.88413 11.6327 1.98552 11.0819C2.08495 10.5317 2.24223 9.84018 2.45345 9.00861C2.66467 8.17772 2.78556 7.68891 2.81805 7.54421C2.66922 7.23279 2.59383 6.82601 2.59383 6.32587C2.59383 5.92643 2.71537 5.55232 2.95908 5.20022C3.20345 4.84946 3.51216 4.67408 3.88651 4.67408C4.17312 4.67408 4.39539 4.77144 4.55461 4.96683C4.71449 5.16155 4.79248 5.40695 4.79248 5.70636C4.79248 6.02379 4.68979 6.48325 4.48312 7.08408C4.27645 7.68558 4.17377 8.13437 4.17377 8.43245C4.17377 8.73454 4.27905 8.98728 4.48962 9.18533C4.69743 9.38349 4.97224 9.49087 5.25587 9.48475C5.51323 9.48475 5.75175 9.42473 5.97337 9.30403C6.19152 9.18687 6.38036 9.01959 6.52514 8.81523C6.84049 8.3713 7.0653 7.86665 7.1861 7.33148C7.24849 7.05007 7.29659 6.78266 7.32648 6.53126C7.35833 6.27852 7.37197 6.03979 7.37197 5.81306C7.37197 4.9815 7.11461 4.33332 6.60313 3.86919C6.08905 3.40506 5.41964 3.17433 4.59621 3.17433C3.65969 3.17433 2.87654 3.48508 2.24938 4.10859C1.62157 4.73009 1.30571 5.52031 1.30571 6.47858C1.30571 6.68997 1.33691 6.89403 1.39605 7.09142C1.45389 7.28814 1.51693 7.44485 1.58517 7.56088C1.65276 7.67491 1.71645 7.78628 1.7743 7.88897C1.83279 7.99167 1.86333 8.06502 1.86333 8.10903C1.86333 8.24374 1.82889 8.41912 1.75935 8.63584C1.68721 8.85257 1.60207 8.9606 1.49938 8.9606C1.48964 8.9606 1.44934 8.95327 1.37915 8.93793C1.13606 8.86346 0.916529 8.72426 0.742889 8.53448C0.558599 8.3378 0.41316 8.10637 0.314598 7.85296C0.216317 7.60046 0.139769 7.33961 0.0858295 7.07341C0.0275531 6.82153 -0.00124622 6.56341 4.13311e-05 6.30453V6.30453Z" fill="black"/></svg>
                </Social>
              </div>
            </div>
          )}
          <div className="project-details-item d-flex flex-column">
            <ViewProject target="_blank" href="/">VIEW PROJECT</ViewProject>
          </div>
        </div>
        <div className="mt-5 pt-4">
          {/* <Img className="img-fluid" sizes={post.frontmatter.featuredImage.childImageSharp.sizes} /> */}
          <img class="img-fluid" src={post.frontmatter.featuredImage.childImageSharp.sizes.originalImg} alt="" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        client
        date
        category
        sharebuttons
        featuredImage {
          childImageSharp {
            sizes(quality: 100) {
              originalImg
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
