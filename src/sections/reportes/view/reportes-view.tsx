import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ReportesView() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Reportes
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid xs={12}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { bgcolor: 'background.neutral' },
              mb: 2,
            }}
            onClick={() => handleNavigate('/generar-reporte?tipo=creditos')}
          >
            <Iconify icon="eva:file-text-outline" width={40} sx={{ mr: 2 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Creacion de reporte de Créditos Registrados</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="eva:file-text-outline" />}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate('/generar-reporte?tipo=creditos');
              }}
            >
              Generar Reporte
            </Button>
          </Paper>
        </Grid>

        <Grid xs={12}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { bgcolor: 'background.neutral' },
              mb: 2,
            }}
            onClick={() => handleNavigate('/generar-reporte?tipo=seguimiento')}
          >
            <Iconify icon="eva:file-text-outline" width={40} sx={{ mr: 2 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Creacion de reporte de Seguimiento de Pagos</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="eva:file-text-outline" />}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate('/generar-reporte?tipo=seguimiento');
              }}
            >
              Generar Reporte
            </Button>
          </Paper>
        </Grid>

        <Grid xs={12}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { bgcolor: 'background.neutral' },
            }}
            onClick={() => handleNavigate('/generar-reporte?tipo=validacion')}
          >
            <Iconify icon="eva:file-text-outline" width={40} sx={{ mr: 2 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Creacion de reporte de Validación de Pagos</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="eva:file-text-outline" />}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate('/generar-reporte?tipo=validacion');
              }}
            >
              Generar Reporte
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

export default ReportesView; 