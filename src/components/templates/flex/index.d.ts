import {
  StyledComponentProps,
  ColorType,
  AlignSelfProps,
  PaddingProps,
  MarginProps,
  RoundProps,
} from "../../../mixins/types"
import {
  DirectionProps,
  FlexibleProps,
  WrapProps,
  AlignItemsProps,
  AlignContentProps,
  JustifyContentProps,
  GapProps,
  BorderProps,
  OpacityProps,
  WidthProps,
  HeightProps,
  OverflowProps,
} from "../mixins"

export interface FlexProps
  extends StyledComponentProps,
    DirectionProps,
    FlexibleProps,
    WrapProps,
    AlignItemsProps,
    AlignContentProps,
    JustifyContentProps,
    AlignSelfProps,
    MarginProps,
    PaddingProps,
    GapProps,
    OpacityProps,
    BorderProps,
    RoundProps,
    WidthProps,
    HeightProps,
    OverflowProps {
  background?: ColorType
}

declare const Flex: React.FC<FlexProps & JSX.IntrinsicElements["div"]>

export { Flex }

export default Flex
