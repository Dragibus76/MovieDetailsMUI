import { CardMedia, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

export const StyledGridContainer = styled.div`
  overflow-y: auto;
  max-height: 400px;
`;

export const StyledCardMedia = styled(CardMedia)`
  cursor: pointer;
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const StyledModal = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.6);
`;

export const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  outline: none;
  overflow: auto;
`;

export const StyledCloseIconButton = styled(IconButton)`
  position: absolute!important;
  top: 10px;
  right: 10px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  color: #fff;
`;