import {Tabs} from "../tabs/Tabs";
import {Tab} from "../tabs/tab/Tab";
import {TabContent} from "../tabs/tabcontent/TabContent";
import './style.css'

// @ts-ignore
import interactiveTree from '../../assets/images/interactive_tree.png'
// @ts-ignore
import texTree from '../../assets/images/tex_tree.png'
// @ts-ignore
import downloadIcon from '../../assets/icons/download.png'
// @ts-ignore
import copyIcon from '../../assets/icons/copy.png'

import {MapInteractionCSS} from 'react-map-interaction';
import React, {useContext, useEffect, useState} from "react";
import {Button} from "../button/Button";
import {Modal} from "../modal/Modal";
import {Card} from "../card/Card";
import {CardTitle} from "../card/CardTitle";
import {CardSubtitle} from "../card/CardSubtitle";
import {CardImage} from "../card/CardImage";
import {CardContent} from "../card/CardContent";
// @ts-ignore
import pngPreviewImg from '../../assets/images/png_preview.png'

// @ts-ignore
import texPreviewImg from '../../assets/images/latex_preview.png'
import {CommonContext} from "../../CommonContext";
import {ToolTip} from "../tooltip/ToolTip";


export const Tree = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showPngModal, setShowPngModal] = useState(false);
  const [showTexModal, setShowTexModal] = useState(false);


  const [showDownloadToolTip, setShowDownloadToolTip] = useState(false);
  const [hideDownloadToolTip, setHideDownloadToolTip] = useState(true)

  const [showCopyToolTip, setShowCopyToolTip] = useState(false);
  const [hideCopyToolTip, setHideCopyToolTip] = useState(true)

  const commonContext = useContext(CommonContext)

  const openPngModal = () => {
    setShowPngModal(true);
  }

  const closePngModal = () => {
    setShowPngModal(false);
  }

  const openTextModal = () => {
    setShowTexModal(true);
  }

  const closeTextModal = () => {
    setShowTexModal(false);
  }


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    document.querySelectorAll<HTMLImageElement>(".tree-img").forEach(img => {
      img.addEventListener("mousedown", handleMouseDown);
      img.addEventListener("mouseup", handleMouseUp);
    });
  }, [])

  const handleMouseDown = () => {
    document.querySelectorAll<HTMLImageElement>(".tree-img").forEach(img => {
      img.style.cursor = "grabbing";
    });
  }

  const handleMouseUp = () => {
    document.querySelectorAll<HTMLImageElement>(".tree-img").forEach(img => {
      img.style.cursor = "grab";
    });
  }

  return (
      <>
        <section id="tree">
          <Tabs>
            <Tab label="Interactive tree" onClick={() => {
              commonContext.setInteractiveEditor(true)
            }}/>
            <Tab label="Tree with LaTex" onClick={() => {
              commonContext.setInteractiveEditor(false)
            }} defaultActive/>


            <TabContent label={"Interactive tree"} className={commonContext.isTreeBuilt ? "" : "hidden"}>
              <MapInteractionCSS>
                <img src={interactiveTree} className={'tree-img'} alt={'Interactive tree'}/>
              </MapInteractionCSS>
            </TabContent>

            <TabContent label={"Tree with LaTex"} className={commonContext.isTreeBuilt ? "" : "hidden"}>
              <MapInteractionCSS>
                <img src={texTree} className={'tree-img'} alt={'Tree with Tex'}/>
              </MapInteractionCSS>
            </TabContent>
          </Tabs>

          <div id="download" className={commonContext.isTreeBuilt ? "" : "hidden"}>
            <Button onClick={toggleDropdown} className="download-btn">
              <img src={downloadIcon} alt=""/>
            </Button>
            <div className={"dropdown " + (isDropdownOpen ? "" : "hidden")}>
              <ul>
                <li onClick={() => {
                  openPngModal();
                  toggleDropdown()
                }}>Export as PNG
                </li>
                <li onClick={() => {
                  openTextModal();
                  toggleDropdown()
                }}>Export as LaTex
                </li>
              </ul>
            </div>
          </div>

        </section>
        <div className={"dropdown-state-layer " + (isDropdownOpen ? "" : "hidden")} onClick={toggleDropdown}></div>

        <Modal isOpen={showPngModal} onClose={closePngModal}>
          <Card>
            <CardTitle title={"Preview"}/>
            <CardSubtitle subtitle={"Image preview"}/>
            <CardImage src={pngPreviewImg} alt={"Related image"}/>
            <CardTitle title={"Title"}/>
            <CardContent>
              altera appareat expetenda quam nam veniam conclusionemque scripta convenire natoque sea delicata platonem
              partiendo discere utamur integer delectus epicuri ac no eu aliquet porta hinc veritus dictum instructior
              mediocrem evertitur veritus quidam persius sale autem definiebas percipit cetero mattis volumus
              accommodare
              dictumst recteque eloquentiam ac
            </CardContent>

            <div className="flex justify-end px-10">
              <Button
                  onClick={() => {
                    setShowDownloadToolTip(true)
                    setHideDownloadToolTip(false)
                    setTimeout(() => setShowDownloadToolTip(false), 2000);
                    setTimeout(() => setHideDownloadToolTip(true), 3000);
                  }}
              >
                <p>Download</p>
                <img src={downloadIcon} alt=""/>
              </Button>
            </div>
          </Card>
        </Modal>

        <Modal isOpen={showTexModal} onClose={closeTextModal}>
          <Card>
            <CardTitle title={"Preview"}/>
            <CardSubtitle subtitle={"Latex code preview"}/>
            <CardImage src={texPreviewImg} alt={"Related image"}/>
            <CardTitle title={"Title"}/>
            <CardContent>
              altera appareat expetenda quam nam veniam conclusionemque scripta convenire natoque sea delicata platonem
              partiendo discere utamur integer delectus epicuri ac no eu aliquet porta hinc veritus dictum instructior
              mediocrem evertitur veritus quidam persius sale autem definiebas percipit cetero mattis volumus
              accommodare
              dictumst recteque eloquentiam ac
            </CardContent>

            <div className="flex justify-end px-10">
              <Button
                  onClick={() => {
                    setShowCopyToolTip(true)
                    setHideCopyToolTip(false)
                    setTimeout(() => setShowCopyToolTip(false), 2000);
                    setTimeout(() => setHideCopyToolTip(true), 3000);
                  }}
              >
                <p>Copy to clipboard</p>
                <img src={copyIcon} alt=""/>
              </Button>
            </div>
          </Card>
        </Modal>


        <ToolTip text={"File has been downloaded"}
                 className={"tree-tooltip " + (hideDownloadToolTip ? "hidden" : "")}
                 show={showDownloadToolTip}></ToolTip>
        <ToolTip text={"Code has been copied"}
                 className={"tree-tooltip " + (hideCopyToolTip ? "hidden" : "")} show={showCopyToolTip}></ToolTip>

      </>
  )
}