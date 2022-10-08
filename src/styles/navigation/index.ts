import { Badge, BadgeProps, styled } from "@mui/material";

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 17,
    top: 17,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));