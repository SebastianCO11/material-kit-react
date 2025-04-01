import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function GenerarReportePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const tipoReporte = params.get('tipo') || '';
  
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const [fechaFin, setFechaFin] = useState<Date | null>(null);
  const [formato, setFormato] = useState('pdf');

  const getTitulo = () => {
    switch (tipoReporte) {
      case 'creditos':
        return 'Reporte de Créditos Registrados';
      case 'seguimiento':
        return 'Reporte de Seguimiento de Pagos';
      case 'validacion':
        return 'Reporte de Validación de Pagos';
      default:
        return 'Generar Reporte';
    }
  };

  const handleGenerarReporte = () => {
    // Aquí iría la lógica para generar el reporte según el tipo
    console.log(`Generando reporte de tipo: ${tipoReporte}`);
    console.log(`Fechas: ${fechaInicio} - ${fechaFin}`);
    console.log(`Formato: ${formato}`);
    // Simular descarga o visualización del reporte
    alert(`Reporte generado exitosamente en formato ${formato}`);
  };

  return (
    <>
      <Helmet>
        <title> {`${getTitulo()} - ${CONFIG.appName}`}</title>
      </Helmet>

      <DashboardContent>
        <Box display="flex" alignItems="center" mb={5}>
          <IconButton onClick={() => navigate('/reportes')} sx={{ mr: 2 }}>
            <Iconify icon="eva:arrow-back-fill" />
          </IconButton>
          <Typography variant="h4" flexGrow={1}>
            {getTitulo()}
          </Typography>
        </Box>

        <Card>
          <CardHeader title="Parámetros del reporte" />
          <CardContent>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <DatePicker
                  label="Fecha de inicio"
                  value={fechaInicio}
                  onChange={(newValue) => setFechaInicio(newValue)}
                  slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <DatePicker
                  label="Fecha de fin"
                  value={fechaFin}
                  onChange={(newValue) => setFechaFin(newValue)}
                  slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  select
                  label="Formato"
                  value={formato}
                  onChange={(e) => setFormato(e.target.value)}
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="pdf">PDF</MenuItem>
                  <MenuItem value="excel">Excel</MenuItem>
                  <MenuItem value="csv">CSV</MenuItem>
                </TextField>
              </Grid>

              {tipoReporte === 'creditos' && (
                <Grid xs={12} md={6}>
                  <TextField
                    select
                    label="Estado del crédito"
                    defaultValue="todos"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="todos">Todos</MenuItem>
                    <MenuItem value="activo">Activos</MenuItem>
                    <MenuItem value="cerrado">Cerrados</MenuItem>
                    <MenuItem value="mora">En mora</MenuItem>
                  </TextField>
                </Grid>
              )}

              {tipoReporte === 'seguimiento' && (
                <Grid xs={12} md={6}>
                  <TextField
                    select
                    label="Tipo de pago"
                    defaultValue="todos"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="todos">Todos</MenuItem>
                    <MenuItem value="cuota">Cuotas regulares</MenuItem>
                    <MenuItem value="extra">Pagos extraordinarios</MenuItem>
                  </TextField>
                </Grid>
              )}

              {tipoReporte === 'validacion' && (
                <Grid xs={12} md={6}>
                  <TextField
                    select
                    label="Estado de validación"
                    defaultValue="todos"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="todos">Todos</MenuItem>
                    <MenuItem value="validado">Validados</MenuItem>
                    <MenuItem value="pendiente">Pendientes</MenuItem>
                    <MenuItem value="rechazado">Rechazados</MenuItem>
                  </TextField>
                </Grid>
              )}
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleGenerarReporte}
                startIcon={<Iconify icon="eva:file-text-outline" />}
              >
                Generar Reporte
              </Button>
            </Box>
          </CardContent>
        </Card>
      </DashboardContent>
    </>
  );
} 