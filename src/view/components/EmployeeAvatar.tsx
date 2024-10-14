import { Avatar, Box } from "@mui/material";
import { getInitials } from '../../app/utils/getInitials';

export function EmployeeAvatar({ children }: { children: string }) {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Avatar
        sx={{
          border: '2px solid',
          backgroundColor: 'transparent',
          color: 'grey.500',
          fontSize: 14,
        }}>
        {getInitials(children)}
      </Avatar>
    </Box>
  );
}
